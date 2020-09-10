/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler, ToastAndroid, Platform } from 'react-native';
import { color } from '../assets/colors/color';
import { sizeWidth, sizeFont } from '../assets/responsive/Size';

export default function MyTabBar({ state, descriptors, navigation }) {

    const [curentIndex, setIndex] = useState(0);

    const handleScreen = ({ route, index }) => {
        // console.log(state.index);
        setIndex(index);

        const isFocused = state.index === index;

        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    const iconTab = [
        { image: require('../assets/images/icontab/icon1.png'), imageW: require('../assets/images/icontab/HomeW.png'), title: 'Home' },
        { image: require('../assets/images/icontab/icon2.png'), imageW: require('../assets/images/icontab/ProjectW.png'), title: 'Project' },
        { image: require('../assets/images/icontab/icon3.png'), imageW: require('../assets/images/icontab/MyProjectW.png'), title: 'My Project' },
        { image: require('../assets/images/icontab/icon4.png'), imageW: require('../assets/images/icontab/AkunW.png'), title: 'Profile' },
    ];

    const Btn = {
        width: sizeWidth(7),
        height: sizeWidth(7),
        backgroundColor: color.mainColor,
        borderRadius: sizeWidth(7) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    };

    const TextActive = {
        color: color.mainColor,
        fontSize: sizeFont(3),
    };

    const BtnAnActive = {
        alignItems: 'center',
        justifyContent: 'center',
        width: sizeWidth(7),
        height: sizeWidth(7),
    };

    return (
        <View style={styles.Container}>
            {
                state.routes.map((route, index) => {
                    return (
                        <TouchableOpacity onPress={() => handleScreen({ route, index })} key={index} style={styles.BtnIcon} >
                            <View style={[curentIndex === index && Btn, BtnAnActive]}>
                                {
                                    curentIndex === index ?
                                        <Image style={{ resizeMode: 'contain', width: sizeWidth(3.5) }} source={iconTab[index].imageW} /> :
                                        <Image style={{ resizeMode: 'contain', width: sizeWidth(5) }} source={iconTab[index].image} />
                                }
                            </View>
                            <Text style={[{ fontSize: sizeFont(2.5), marginBottom: 5 }, curentIndex === index ? TextActive : { color: color.fontBody2 }]}>{iconTab[index].title}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: color.background1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingHorizontal: 20,
        // borderTopWidth: 0.5,
        // borderTopColor: color.border1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    BtnIcon: {
        alignItems: 'center',
        // borderWidth: 1,
        width: sizeWidth(18),
    },
    Btn: {
        width: sizeWidth(7),
        height: sizeWidth(7),
        backgroundColor: color.mainColor,
        borderRadius: sizeWidth(7) / 2,
    },
});
