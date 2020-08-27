/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './MyTabbar';
import Home from '../pages/Home';
import Project from '../pages/Project';
import MyProject from '../pages/MyProject';
import Akun from '../pages/Akun';
import BonusPairing from '../pages/BonusPairing';
import BonusSponsor from '../pages/BonusSponsor';
import { color } from '../assets/colors/color';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Project" component={Project} />
            <Tab.Screen name="MyProject" component={MyProject} />
            <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={color.mainColor} barStyle="light-content" />
            <Stack.Navigator headerMode="none" initialRouteName="BonusPairing">
                <Stack.Screen name="Tabs" component={MyTabs} />
                <Stack.Screen name="BonusPairing" component={BonusPairing} />
                <Stack.Screen name="BonusSponsor" component={BonusSponsor} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
