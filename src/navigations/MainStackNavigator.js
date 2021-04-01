import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeStack from './menu/HomeStack'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';




//components
// import CustomHeader from '../components/atoms/CustomHeader';


const MainStackNavigatorConfig = {
  initialRouteName: 'Home'
};



const RouteConfigs = {
  Home: {
    screen: HomeStack,
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     header: () => <CustomHeader navigation={navigation} />
    //   }
    // },
  }
};



const MainStackNavigator = createStackNavigator(RouteConfigs, MainStackNavigatorConfig);


export default MainStackNavigator;
