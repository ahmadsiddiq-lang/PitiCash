import * as React from 'react';
import { StatusBar } from 'react-native';
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
import BonusReward from '../pages/BonusReward';
import Profit from '../pages/Profit';
import Reaferals from '../pages/Refferal';
import MetodePembayaran from '../pages/MetodePembayaran';
import TopUp from '../pages/TopUp';
import Transfer from '../pages/Transfer';
import DetailProject from '../pages/DetailProject';
import Login from '../pages/Login';
import Splash from '../pages/Splash';
import { color } from '../assets/colors/color';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Project" component={Project} />
            <Tab.Screen name="MyProject" component={MyProject} />
            <Tab.Screen name="Akun" component={Reaferals} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={color.mainColor} barStyle="light-content" />
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Tabs" component={MyTabs} />
                <Stack.Screen name="BonusPairing" component={BonusPairing} />
                <Stack.Screen name="BonusSponsor" component={BonusSponsor} />
                <Stack.Screen name="BonusReward" component={BonusReward} />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Profit" component={Profit} />
                <Stack.Screen name="Reaferals" component={Reaferals} />
                <Stack.Screen name="MetodePembayaran" component={MetodePembayaran} />
                <Stack.Screen name="TopUp" component={TopUp} />
                <Stack.Screen name="Transfer" component={Transfer} />
                <Stack.Screen name="DetailProject" component={DetailProject} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
