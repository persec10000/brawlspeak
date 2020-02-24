import { Fragment } from "react";
import {
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  Linking,
  ToastAndroid
} from "react-native";
import BrawlerBox from "./brawlerBox";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import brawlersData, {
  ENV,
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from "../../constants";
import React from "react";
import analytics from "@react-native-firebase/analytics";
import SplashScreen from "react-native-splash-screen";
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
  AdEventType
} from "@react-native-firebase/admob";
import Dialog from "react-native-dialog";
import LocalStorage from "../../LocalStorage";
import { NavigationDrawerStructure } from "../../navigation/NavigationDrawerStructure";

let RATE_SECONDS_DELAY = 280;
let ADS_SECONDS_DELAY = 35;
const NUMBER_OF_ENTRANCES = 3;
const NOT_RATE_NOW_DELAY_ENTRANCES = -3;
// const isSmallDevice = SCREEN_WIDTH <= 414;
// const numColumns = Math.ceil(SCREEN_WIDTH * 0.006);
// const numColumns = isSmallDevice ? 2 : 3;

export const getNumColumns = () => {
  const num = Math.ceil(SCREEN_WIDTH * 0.006);
  if (num > 4) {
    return 4;
  }

  return num;
};

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
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
        // backgroundColor: '#004C99',
        height: SCREEN_HEIGHT * 0.08
      },
      headerTintColor: "#fff"
    };
  };

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  async handleNotNow() {
    this.setState({ dialogVisible: false });
    RATE_SECONDS_DELAY += 600;
    await LocalStorage.storeData(`entrances`, NOT_RATE_NOW_DELAY_ENTRANCES);
    await analytics().logEvent("not_now_rate_touch");
  }

  async handleRateUs() {
    this.setState({ dialogVisible: false });
    await this.setRatedValue(true);
    await Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.drsimple.brawlspeak"
    );
    await analytics().logEvent("rate_us_touch");
  }

  async setRatedValue(value) {
    await LocalStorage.storeData(`rated`, value);
  }

  async componentDidMount() {
    console.disableYellowBox = true;
    setTimeout(() => {
      SplashScreen.hide();
    }, 1200);
    let userEntrances = await this.getUserEntrances();

    if (userEntrances < NOT_RATE_NOW_DELAY_ENTRANCES) {
      await LocalStorage.storeData(`entrances`, NOT_RATE_NOW_DELAY_ENTRANCES);
    }

    if (userEntrances <= NUMBER_OF_ENTRANCES) {
      await LocalStorage.storeData(`entrances`, userEntrances + 1);
    } else {
      if (await this.UserNotRated()) {
        await this.showDialog();
      }
    }
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
    this.setState({ searchTrue: true, searchText });
    let array = [];
    for (i = 0; i < brawlersData.length; i++) {
      if (
        brawlersData[i]["name"]
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) >= 0
      ) {
        array.push(brawlersData[i]);
      }
    }
    this.setState({ brawlersData: array });
  };
  onChangeFocus = () => {
    this.setState({ focus: true, searchTrue: true });
  };
  cancelSearch = () => {
    this.setState({
      searchTrue: false,
      searchText: "",
      brawlersData: brawlersData
    });
  };
  async showRateUs() {
    if (await this.UserNotRated()) {
      if (
        !this.state.lastRateTime ||
        new Date().getTime() - this.state.lastRateTime.getTime() >=
          RATE_SECONDS_DELAY * 1000
      ) {
        this.updateLastRateTime(new Date());
        this.showDialog();
      }
    }
  }

  async UserNotRated() {
    let userNotRated = true;
    if (await LocalStorage.getData(`rated`)) {
      userNotRated = false;
    }
    return userNotRated;
  }

  async getUserEntrances() {
    let userEntrances = await LocalStorage.getData(`entrances`);
    if (userEntrances === null || userEntrances === undefined) {
      return 0;
    }
    return parseInt(userEntrances);
  }

  constructor(props) {
    super(props);
    this.lastAdTime = new Date();
    this.isAdLoaded = false;
    this.ad = null;
    // this.loadAd();
    this.state = {
      lastAdTime: new Date(),
      lastRateTime: new Date(),
      dialogVisible: false,
      searchText: "",
      focus: false,
      searchTrue: false,
      brawlersData: brawlersData
    };
  }

  updateLastRateTime(date) {
    this.setState({
      lastRateTime: date
    });
  }

  async navigateToProfile(data) {
    // if (data.name === "MrP") {
    //     message = 'Mr.P coming soon ...';
    //     ToastAndroid.showWithGravity(
    //         message,
    //         ToastAndroid.LONG,
    //         ToastAndroid.CENTER,
    //     );
    //     return
    // }
    if (data.name === "Question") {
      data =
        brawlersData[Math.floor(Math.random() * (brawlersData.length - 1))];
    }
    await this.checkToShowAd();
    const { navigate } = this.props.navigation;
    return navigate("Profile", {
      data: data,
      lastAdTime: this.lastAdTime,
      showRateUs: () => this.showRateUs()
    });
  }

  loadAd() {
    const interstitial = InterstitialAd.createForAdRequest(
      ENV !== "prod"
        ? TestIds.INTERSTITIAL
        : "ca-app-pub-5053311607277364/5310833598"
    );
    interstitial.onAdEvent(async (type, error) => {
      if (type === AdEventType.LOADED) {
        this.isAdLoaded = true;
        this.ad = interstitial;
      }
    });

    interstitial.load();
  }

  incrementAdDelay() {
    if (ADS_SECONDS_DELAY < 120) {
      ADS_SECONDS_DELAY += 25;
    } else {
      ADS_SECONDS_DELAY = 120;
    }
  }

  async checkToShowAd() {
    if (
      !this.lastAdTime ||
      new Date().getTime() - this.lastAdTime.getTime() >=
        ADS_SECONDS_DELAY * 1000
    ) {
      if (this.isAdLoaded && this.ad) {
        this.incrementAdDelay();
        this.ad.show();
        this.lastAdTime = new Date();
        this.isAdLoaded = false;
        this.ad = null;
      }
      this.loadAd();
    }
  }

  render() {
    // let brawlers = ['shelly', 'nita', 'colt', 'bull', 'jessie', 'brock', 'dynamike', 'bo', 'tick', 'bit', 'emz', 'primo', 'barley', 'poco', 'rosa', 'rico', 'darryl', 'penny', 'carl', 'piper', 'pam', 'frank', 'bibi', 'bea', 'mortis', 'tara', 'gene', 'max', 'leon', 'spike', 'crow', 'sandy'];
    return (
      <Fragment>
        <ImageBackground
          source={require("../../static/images/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View style={styles.mainView}>
    {console.log("Flatlist==", this.state.brawlersData)}
              <FlatList
                columnWrapperStyle={{
                  flexWrap: "wrap",
                  flex: 1,
                  justifyContent: "space-around"
                }}
                horizontal={false}
                numColumns={getNumColumns()}
                // numColumns={3}
                data={this.state.brawlersData}
                extraData={this.state}
                renderItem={({ item }) => (
                  <BrawlerBox
                    styleProps={brawlerBoxStylePros}
                    imageSource={item.boxImage}
                    onPress={async () => await this.navigateToProfile(item)}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ScrollView>
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Liked our application? Rate us!</Dialog.Title>
            <Dialog.Button
              label="Not Now"
              onPress={async () => {
                await this.handleNotNow();
              }}
            />
            <Dialog.Button
              label="Rate !"
              onPress={async () => {
                await this.handleRateUs();
              }}
            />
            <Image
              style={{
                alignSelf: "center",
                resizeMode: "contain",
                height: SCREEN_HEIGHT * 0.15,
                width: SCREEN_WIDTH * 0.15
              }}
              source={require("../../static/images/rateus.png")}
            />
          </Dialog.Container>
        </ImageBackground>
      </Fragment>
    );
  }
}

const brawlerBoxStylePros = {
  // width: 100,
  width: SCREEN_WIDTH * 0.1 + 64,
  height: SCREEN_HEIGHT * 0.1 + 35
  // width: (SCREEN_WIDTH ) / (numColumns * 0.5),
  // ,
  // height: SCREEN_HEIGHT * 0.2,
  // height: 100,
};

const styles = StyleSheet.create({
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

export default HomeScreen;
