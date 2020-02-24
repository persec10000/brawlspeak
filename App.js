/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";
import HomeScreen from "./app/main/components/mainScreen";
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
  AdEventType
} from "@react-native-firebase/admob";
import ProfileScreen from "./app/profile/components/profile";
import { ENV, SCREEN_HEIGHT, SCREEN_WIDTH } from "./app/constants";
import "react-native-gesture-handler";
import CustomDrawerMenu from "./app/navigation/CustomDrawerMenu";
import { NavigationDrawerStructure } from "./app/navigation/NavigationDrawerStructure";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    // Home: {screen: HomeScreen},
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: MainNavigator
  },
  {
    drawerWidth: SCREEN_WIDTH * 0.7,
    drawerBackgroundColor: "transparent",
    contentComponent: CustomDrawerMenu
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);
export default class App extends React.Component {
  render() {
    return (
      <>
        <ImageBackground
          source={require("./app/static/images/banner-background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <AppContainer />

          <BannerAd
            unitId={
              ENV !== "prod"
                ? TestIds.BANNER
                : "ca-app-pub-5053311607277364/2137849696"
            }
            size={BannerAdSize.SMART_BANNER}
          />
        </ImageBackground>
      </>
    );
  }
}
