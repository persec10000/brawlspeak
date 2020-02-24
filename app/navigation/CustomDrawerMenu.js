//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import {Linking, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5' ;
import FeatherIcon from 'react-native-vector-icons/dist/Feather' ;
import analytics from '@react-native-firebase/analytics';
import {sendEmail} from "../send-email";
import {SCREEN_WIDTH} from "../constants";

const ICON_SIZE = SCREEN_WIDTH * 0.07;
export default class CustomDrawerMenu extends Component {
    constructor() {
        super();
        this.items = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
            },
            // {
            //     navOptionThumb: 'image',
            //     navOptionName: 'Second Screen',
            //     screenToNavigate: 'NavScreen2',
            // },
            // {
            //     navOptionThumb: 'build',
            //     navOptionName: 'Third Screen',
            //     screenToNavigate: 'NavScreen3',
            // },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{width: '100%' }}>
                    {this.items.map((item, key) => (
                        <TouchableOpacity
                            onPress={() => {
                                // global.currentScreenIndex = key;
                                this.props.navigation.navigate(item.screenToNavigate);
                                this.props.navigation.toggleDrawer();
                            }}

                            style={styles.DrawerItemView}
                            key={key}>
                            <View style={styles.drawerIcon}>
                                <Icon name={item.navOptionThumb} size={ICON_SIZE} color="#808080" />
                            </View>
                            <Text
                                style={styles.DrawerItemText}
                               >
                                {item.navOptionName}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        onPress={async () => {
                            Linking.openURL('https://play.google.com/store/apps/details?id=com.drsimple.brawlspeak');
                            this.props.navigation.toggleDrawer();
                            await analytics().logEvent("rate_us_clicked");
                        }}

                        style={styles.DrawerItemView}
                    >
                        <View style={styles.drawerIcon}>
                            <Icon name={"star"} size={ICON_SIZE} color="#808080" />
                        </View>
                        <Text
                            style={styles.DrawerItemText}
                        >
                            {"Rate Us"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // global.currentScreenIndex = key;
                            Linking.openURL('https://sfx-for-brawl-stars.flycricket.io/privacy.html');
                            this.props.navigation.toggleDrawer();
                        }}

                        style={styles.DrawerItemView}
                    >
                        <View style={styles.drawerIcon}>
                            <Icon name={"file-contract"} size={ICON_SIZE} color="#808080" />
                        </View>
                        <Text
                            style={styles.DrawerItemText}
                        >
                            {"Privacy Policy"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            // global.currentScreenIndex = key;
                            sendEmail(
                                'drsimpleapps@gmail.com',
                                'Hello Developers!',
                                ''
                            ).then(() => {
                                console.log('Our email successful provided to device mail ');
                            });
                            this.props.navigation.toggleDrawer();
                            await analytics().logEvent("contact_us_clicked");
                        }}

                        style={styles.DrawerItemView}
                    >
                        <View style={styles.drawerIcon}>
                            <FeatherIcon name={"mail"} size={ICON_SIZE} color="#808080" />
                        </View>
                        <Text
                            style={styles.DrawerItemText}
                        >
                            {"Contact Us"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        // opacity: 0.95,
        width: '100%',
        height: '100%',
        // backgroundColor: '#181818',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
    drawerIcon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 10
    },
    DrawerItemText : {
        flex: 4,
        fontSize: SCREEN_WIDTH * 0.04,
        fontFamily: "LilitaOne-Regular",
    },
    DrawerItemView : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 17,
    }
});
