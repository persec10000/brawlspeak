import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';

class BrawlerBox extends React.Component {
    render() {
        return (
            <View style={styles.boxView}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image style={{...this.props.styleProps, ...styles.imageStyle}} source={(this.props.imageSource)}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        // width: 100,
        // height: 100,
        padding: 5,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: "black"
    },

    boxView: {
        padding: 5,
        alignSelf: 'flex-start',

        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    }
});

BrawlerBox.propTypes = {
    styleProps: PropTypes.object,
    imageSource: PropTypes.number
};

export default BrawlerBox;










