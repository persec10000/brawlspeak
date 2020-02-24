import React, { Fragment } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
	ToastAndroid,
	TextInput
} from "react-native";
import { BlinkingText } from "./blinkingText";
import Quote from "./quote";
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
  AdEventType,
  RewardedAdEventType,
  RewardedAd
} from "@react-native-firebase/admob";
import Swiper from "react-native-swiper";
import analytics from "@react-native-firebase/analytics";
import { ENV, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import Sound from "react-native-sound";
import * as Progress from "react-native-progress";
import LocalStorage from "../../LocalStorage";

const UNLOCK_COOLDOWN = 10;

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
    const { params = {} } = navigation.state;
    return {
      title: "",
      headerBackground: () => (
        <ImageBackground
          source={require("../../static/images/banner-background.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      ),
      headerRight: () => (
        <View style={styles.searchView}>
          <Image
            style={styles.searchIcon}
            source={require("../../static/images/search.png")}
          />
          <TextInput
            placeholder={"Search"}
            placeholderTextColor="lightgray"
            underlineColorAndroid={"transparent"}
            onChangeText={text => params.onChangeSearch(text)}
            returnKeyType={"go"}
            value={params.searchText}
            onFocus={() => params.onChangeFocus()}
            style={styles.searchInput}
            textColor="#fff"
          />
          {params.searchTrue && (
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 5,
                top: 13,
                alignItems: "center",
                marginRight: 5,
                width: 25,
                height: 25
              }}
              onPress={() => params.cancelSearch()}
            >
              <Image
                style={{ width: 15, height: 15, tintColor: "white" }}
                source={require("../../static/images/cancel.png")}
              />
            </TouchableOpacity>
          )}
        </View>
      ),
      headerStyle: {
        // backgroundColor: 'black',
        height: SCREEN_HEIGHT * 0.08
      },
      headerTintColor: "#fff"
    };
  };
  async componentDidMount() {
    // console.disableYellowBox = true;
		// await this.checkUnlockReady();
    const { profileImages, mechaImages, name } = this.props.navigation.getParam(
      "data"
    );
    const showRateUs = this.props.navigation.getParam("showRateUs");
    const mergedImages = await this.mergeImages(profileImages, mechaImages);
    Promise.all(mergedImages).then(res => {
      this.setState({ profileImages: res });
    });
    await this.checkUnlockReady();
    await analytics().logEvent("profile_screen", { profile_name: name });
    this._interval = setInterval(async () => {
      await this.checkUnlockReady();
    }, 1000);
		showRateUs();
		this.props.navigation.setParams({
      onChangeSearch: this.onChangeSearch,
      onChangeFocus: this.onChangeFocus,
      searchText: this.state.searchText,
      searchTrue: this.state.searchTrue,
      cancelSearch: this.cancelSearch
    });
  }
	componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.searchTrue !== this.state.searchTrue
    ) {
      this.props.navigation.setParams({
        searchTrue: this.state.searchTrue,
        searchText: this.state.searchText
      });
    }
  }
  onChangeSearch = searchText => {
    console.log("value changed", searchText);
    this.setState({ searchTrue: true, searchText });
    let array = [];
    for (i = 0; i < this.quotes.length; i++) {
      if (
        this.quotes[i]["text"]
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) >= 0
      ) {
        array.push(this.quotes[i]);
      }
		}
    this.setState({ quotes: array });
  };
  onChangeFocus = () => {
    this.setState({ focus: true, searchTrue: true });
  };
  cancelSearch = () => {
    this.setState({
      searchTrue: false,
			searchText: "",
			quotes: this.quotes
    });
  };
  constructor(props) {
    super(props);
    this.sounds = {};
    this.state = {
      isCooldownUnlocked: true,
      cooldownTimeLeft: UNLOCK_COOLDOWN,
      autoplay: true,
      profileImages: [],
      loadingAd: false,
      isBlur: false,
      quotes: this.props.navigation.getParam("data").quotes,
			hitSounds: this.props.navigation.getParam("data").hitSounds,
      searchText: "",
      focus: false,
      searchTrue: false,
      smileyOpacity: 1
		};
		this.quotes = [...this.state.quotes];
  }

  async mergeImages(profileImages, mechaImages) {
    const mappedProfileImages = profileImages.map(profileImage => {
      return { image: profileImage, isImageUnlocked: true };
    });

    if (mechaImages !== undefined) {
      let mappedMechaImages = mechaImages.map(async mechaImage => {
        const { name } = this.props.navigation.getParam("data");
        let isImageUnlocked = await this.isImageUnlocked(name, mechaImage);
        return { image: mechaImage, isImageUnlocked: isImageUnlocked };
      });
      return mappedProfileImages.concat(mappedMechaImages);
    }

    return mappedProfileImages;
  }

  async startUnlockCooldown() {
    await LocalStorage.storeData("unlock_cooldown", Date.parse(new Date()));
    this.setState({
      isCooldownUnlocked: false,
      cooldownTimeLeft: UNLOCK_COOLDOWN
    });
  }

  async checkUnlockReady() {
    let unlockCooldownTime = await LocalStorage.getData("unlock_cooldown");
    if (unlockCooldownTime === undefined || unlockCooldownTime === null) {
      unlockCooldownTime = 0;
    }

    let timeDifference = Date.parse(new Date()) - unlockCooldownTime;

    if (timeDifference > UNLOCK_COOLDOWN * 60 * 1000) {
      this.setState({ isCooldownUnlocked: true });
    } else {
      this.setState({
        isCooldownUnlocked: false,
        cooldownTimeLeft: Math.ceil(
          UNLOCK_COOLDOWN - timeDifference / 1000 / 60
        )
      });
    }
  }

  async playSound(image, isImageUnlocked = true) {
    const { name } = this.props.navigation.getParam("data");
    if (!isImageUnlocked && this.state.isCooldownUnlocked) {
      const rewarded = RewardedAd.createForAdRequest(
        ENV !== "prod"
          ? TestIds.REWARDED
          : "ca-app-pub-5053311607277364/1322276646"
      );

      rewarded.onAdEvent(async (type, error, reward) => {
        if (type === RewardedAdEventType.LOADED) {
          await rewarded.show();
        }
        if (type === RewardedAdEventType.EARNED_REWARD) {
          let newProfileImages = [...this.state.profileImages];
          newProfileImages.forEach(async profileImage => {
            if (profileImage.image === image) {
              profileImage.isImageUnlocked = true;
              await LocalStorage.storeData(`locked_${name}_${image}`, true);
              this.unlockMecha();
              await this.startUnlockCooldown();
            }
          });
          this.setState({ profileImages: newProfileImages });
        }

        if (error) {
          let message = "Something went wrong. Please try again later.";
          try {
            if (error.message.toLowerCase().includes("network")) {
              message =
                "Could not load ad. Please check your internet connection.";
            }
          } catch (e) {}
          ToastAndroid.showWithGravity(
            message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        }
        if (type !== RewardedAdEventType.LOADED) {
          this.setState({ loadingAd: false });
        }
      });

      if (!this.state.loadingAd) {
        rewarded.load();
        this.setState({ loadingAd: true, autoplay: false });
      }
    } else if (
      this.state.hitSounds.length > 0 &&
      (isImageUnlocked || this.state.isCooldownUnlocked)
    ) {
      const { name } = this.props.navigation.getParam("data");
      let path = this.state.hitSounds[
        Math.floor(Math.random() * this.state.hitSounds.length)
      ];
      let audio = null;
      await analytics().logEvent("profile_hit_sound", { brawler: name });
      if (path in this.sounds) {
        audio = this.sounds[path] || null;
      }
      if (audio == null || !audio._loaded) {
        audio = new Sound(path, Sound.MAIN_BUNDLE, error => {
          if (error) {
            return;
          }
          this.sounds[path] = audio;
          audio.setVolume(0.8);
          audio.play(success => {
            if (success) {
              audio.release();
              delete this.sounds[path];
            } else {
              console.log("playback failed due to audio decoding errors");
            }
          });
        });
      } else {
        audio.stop(() => {
          audio.setVolume(0.8);
          audio.play(success => {
            if (success) {
              audio.release();
              delete this.sounds[path];
            } else {
              console.log("playback failed due to audio decoding errors");
            }
          });
        });
      }
    }
  }

  renderQuotes = (quotes, name) => {
    if (quotes.length > 0) {
      return (
        <FlatList
          data={this.state.quotes}
					extraData={this.state}
          renderItem={({ item }) => (
            <Quote brawler={name} data={item} isBlur={this.state.isBlur} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
      // return (
      //     quotes.map((quote, index) => <Quote brawler={name} key={index} data={quote}
      //                                         isBlur={this.state.isBlur}/>)
      // )
    } else {
      return (
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (name.toLowerCase() === "leon") {
                if (this.state.smileyOpacity <= 0) {
                  this.setState({ smileyOpacity: 1 });
                } else {
                  this.setState({
                    smileyOpacity: this.state.smileyOpacity - 0.1
                  });
                }
              }
            }}
          >
            <Image
              opacity={this.state.smileyOpacity}
              style={{ width: SCREEN_WIDTH * 0.4, height: SCREEN_HEIGHT * 0.2 }}
              resizeMode={"contain"}
              source={require("../../static/images/silence.png")}
            />
          </TouchableOpacity>
          <Text style={styles.silenceText}>I'm not talking</Text>
        </View>
      );
    }
  };

  renderProfiles(mergedImages) {
    return mergedImages.map(({ image, isImageUnlocked }) => {
      return (
        <View style={styles.profilePictureView}>
          <TouchableOpacity
            activeOpacity={
              (this.state.isCooldownUnlocked || isImageUnlocked) &&
              !this.state.loadingAd
                ? 0.5
                : 1
            }
            onPress={() => this.playSound(image, isImageUnlocked)}
          >
            {this.state.loadingAd && (
              <View style={styles.loadingAdView}>
                <Progress.CircleSnail
                  size={SCREEN_WIDTH * 0.07 + SCREEN_HEIGHT * 0.07}
                  color={["red", "green", "blue"]}
                />
              </View>
            )}
            {!isImageUnlocked &&
              this.state.isCooldownUnlocked &&
              !this.state.loadingAd && (
                <Image
                  style={styles.profileUnlockImage}
                  source={require("../../static/images/lock_media.png")}
                />
              )}

            {!isImageUnlocked &&
              !this.state.isCooldownUnlocked &&
              !this.state.loadingAd && (
                <View style={styles.cooldownView}>
                  <Text style={styles.cooldownText}>Please wait</Text>
                  <Text style={styles.cooldownTimeText}>
                    {this.state.cooldownTimeLeft}{" "}
                  </Text>
                  <Text style={styles.cooldownText}>minutes to unlock!</Text>
                </View>
              )}

            <Image
              blurRadius={isImageUnlocked ? 0 : 9}
              style={styles.profileImage}
              source={image}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      );
    });
  }

  unlockMecha() {
    const { mechaHitSounds, mechaQuotes } = this.props.navigation.getParam(
      "data"
    );
    if (mechaHitSounds !== undefined && mechaHitSounds.length > 0) {
      this.setState({ hitSounds: mechaHitSounds });
    }

    if (mechaQuotes !== undefined && mechaQuotes.length > 0) {
      // console.log("setting is blur false");
      this.setState({ quotes: mechaQuotes, isBlur: false });
    }
  }

  async onIndexChanged(index) {
    const {
      quotes,
      mechaQuotes,
      profileImages,
      mechaImages,
      name
    } = this.props.navigation.getParam("data");
    if (
      mechaImages !== undefined &&
      mechaQuotes !== undefined &&
      profileImages.length - index - 1 < 0
    ) {
      if (
        await this.isImageUnlocked(
          name,
          mechaImages[index - profileImages.length]
        )
      ) {
        this.unlockMecha();
      } else {
        // console.log("setting is blur true");
        this.setState({
          isBlur: true
        });
      }
    } else {
      // console.log("setting is blur false");
      this.setState({
        quotes: quotes,
        hitSounds: this.props.navigation.getParam("data").hitSounds,
        isBlur: false
      });
    }
  }

  async isImageUnlocked(name, image) {
    let isImageUnlocked = false;
    if (await LocalStorage.getData(`locked_${name}_${image}`)) {
      isImageUnlocked = true;
    }
    return isImageUnlocked;
  }

  componentWillUnmount() {
    if (this.audio != null && this.audio._loaded) {
      this.audio.stop();
      this.audio.release();
    }
    clearInterval(this._interval);
  }

  render() {
    const { name } = this.props.navigation.getParam("data");
    return (
      <Fragment>
        <ImageBackground
          source={require("../../static/images/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.profileView}>
            <BlinkingText text="Hit Me!" />
            <Swiper
              loop={false}
              autoplay={this.state.autoplay}
              autoplayTimeout={45}
              onIndexChanged={async index => {
                await this.onIndexChanged(index);
              }}
              activeDotColor="lightgreen"
            >
              {this.renderProfiles(this.state.profileImages)}
            </Swiper>
            <ScrollView persistentScrollbar={true} style={styles.quotesView}>
              {this.renderQuotes(this.state.quotes, name)}
            </ScrollView>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  silenceText: {
    fontSize: SCREEN_WIDTH * 0.04,
    fontFamily: "LilitaOne-Regular",
    paddingTop: 10,
    color: "white"
  },
  profileImage: {
    alignSelf: "center",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.3
    // height: SCREEN_HEIGHT * 0.4,
  },
  profileView: {
    flex: 1
  },
  profilePictureView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  quotesView: {
    padding: 5,
    margin: 15,
    flex: 4
  },
  cooldownText: {
    color: "white",
    fontFamily: "LilitaOne-Regular",
    fontWeight: "bold",
    fontSize: SCREEN_WIDTH * 0.035,
    textAlign: "center"
  },
  cooldownTimeText: {
    color: "white",
    fontFamily: "LilitaOne-Regular",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: SCREEN_WIDTH * 0.05
  },

  cooldownView: {
    padding: SCREEN_WIDTH * 0.02,
    zIndex: 1,
    borderWidth: 2,
    borderColor: "#B1D4E0",
    backgroundColor: "#04264B",
    borderRadius: 8,
    position: "absolute",
    left: SCREEN_WIDTH * 0.32,
    top: 50
  },

  profileUnlockImage: {
    zIndex: 1,
    position: "absolute",
    left: SCREEN_WIDTH * 0.31,
    top: SCREEN_HEIGHT * 0.05,
    resizeMode: "contain",
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_WIDTH * 0.3
  },

  loadingAdView: {
    position: "absolute",
    left: SCREEN_WIDTH * 0.38,
    top: SCREEN_HEIGHT * 0.07,
    zIndex: 100
	},
	mainView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  searchView: {
    backgroundColor: "#333333",
    width: 300,
    height: 40,
    marginTop: 3,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    resizeMode: "contain",
    width: 25,
    height: 25,
    marginLeft: 15
  },
  searchInput: {
    marginLeft: 18,
    marginRight: 40,
    fontSize: 14,
    color: "#FFF",
    width: "100%"
  }
});
export default ProfileScreen;
