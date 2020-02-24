import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import {SCREEN_WIDTH} from "../constants";


export class NavigationDrawerStructure extends React.Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ marginLeft: 8, flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Icon name="menu" size={SCREEN_WIDTH * 0.06 + 10} color="white" />
                </TouchableOpacity>
            </View>
        );
    }
}
