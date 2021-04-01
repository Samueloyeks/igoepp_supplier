import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../views/authLoading';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator'



const NavigatorConfig = {
    initialRouteName: 'AuthLoading'
};

const RouteConfigs = {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    Main: AppNavigator,
};


export default createAppContainer(
    createSwitchNavigator(RouteConfigs, NavigatorConfig),
);
