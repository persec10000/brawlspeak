import React, { Component } from 'react';
import { StyleSheet, Text, } from 'react-native';
import {SCREEN_WIDTH} from "../../constants";


export class BlinkingText extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Change the state every second
        setInterval(() => {
                this.setState(previousState => {
                    return { showText: !previousState.showText };
                });
            },
            // Define any blinking time.
            4500);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={styles.blinkText}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
    blinkText: {
        transform: [{ rotate: '-20deg'}],
        fontFamily: "LilitaOne-Regular",
        color: "white",
        paddingLeft: 30,
        fontSize : SCREEN_WIDTH * 0.045,
    },
});
