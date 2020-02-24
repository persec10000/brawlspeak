import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../constants";
import Sound from 'react-native-sound';

class Quote extends React.Component {
    playSound = () => {
        if (this.audio == null || !this.audio._loaded) {
            this.audio = new Sound(this.props.data.sound, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    return;
                }
                this.audio.setVolume(0.8);
                this.audio.play((success) => {
                    if (success) {
                        // console.log('successfully finished playing');
                        this.audio.release();
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            });
        }
        else {
            console.log("stopping and playing!");
            this.audio.stop(() => {
                this.audio.setVolume(0.8);
                this.audio.play((success) => {
                    if (success) {
                        // console.log('successfully finished playing');
                        this.audio.release();
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            });
        }
    };

    constructor(props) {
        super(props);
        this.audio = null;
    }

    async handleQuotePress() {
        if (!this.props.isBlur) {
            this.playSound();
            await analytics().logEvent("sound_played", {"brawler": this.props.brawler, "quote": this.props.data.text});
        }
    }

    render() {
        return (
            <View style={styles.quoteView}>
                {<TouchableOpacity style={styles.quoteButton} onPress={() => this.handleQuotePress()}>
                    {!this.props.isBlur ?
                    <Text style={styles.quoteText}>
                        {this.props.data.text}
                    </Text>
                    : <Image resizeMode={"contain"} style={{height: SCREEN_HEIGHT * 0.035}}
                             source={require('../../static/images/quote_lock.png')}/>}
                </TouchableOpacity>}
            </View>
        )
    }

    componentWillUnmount() {
        if (this.audio != null && this.audio._loaded) {
            this.audio.stop();
            this.audio.release();
        }
    }
}

const styles = StyleSheet.create({
    quoteView: {
        padding: 10,
    },
    quoteText: {
        color: "#E0E0E0",
        textAlign: "center",
        fontSize: SCREEN_WIDTH * 0.04,
        fontFamily: "LilitaOne-Regular"
    },
    quoteButton: {
        justifyContent: "center",
        alignItems: "center",
        height: SCREEN_HEIGHT * 0.06,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#B1D4E0",
        backgroundColor: "#04264B"
    }
});

export default Quote;

