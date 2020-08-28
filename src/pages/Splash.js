/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { color } from '../assets/colors/color';
import { sizeWidth, SCREEN_WIDTH, sizeFont } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';

const data = [
    { image: require('../assets/images/splash/Gambar1.png'), title: 'Daftar Geratis', text: 'Pendaftaran Geratis. Tidak perlu mengeluarkan uang sedikitpun' },
    { image: require('../assets/images/splash/Gambar2.png'), title: 'Profit Besar', text: 'Anda dapat berinfestasi dengan resiko kecil dan profit besar' },
    { image: require('../assets/images/splash/Gambar3.png'), title: 'Investasi Aman', text: 'Tidak perlu takut berinvestasi, kami menjamin uang anda kembali' },
];

export default function Splash({ navigation }) {
    const scrollRef = React.createRef();
    const [indexOf, setIndex] = useState(0);


    const handleSetIndex = (e) => {
        const contentOffset = e.nativeEvent.contentOffset.x;
        const selectedIndex = Math.ceil(contentOffset / SCREEN_WIDTH);
        // console.log(selectedIndex);
        setIndex(selectedIndex);
    };



    return (
        <View style={styles.Container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleSetIndex}
                ref={scrollRef}
            >
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxContent}>
                                <View style={styles.BoxImage}>
                                    <Image style={styles.Image} source={item.image} />
                                </View>
                                <View style={styles.BoxText}>
                                    <Text style={{ fontSize: sizeFont(8), fontFamily: Poppins.Bold, color: color.mainColor }}>{item.title}</Text>
                                    <Text style={{ textAlign: 'center', color: color.fontBody2 }}>{item.text}</Text>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
            <View style={styles.BoxFooter}>
                <View style={styles.BoxCircle}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={[styles.Circle, indexOf === index && styles.CicleActive]} />
                            );
                        })
                    }
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
        // paddingHorizontal: 25,
    },
    BoxContent: {
        // borderWidth: 1,
        flex: 2,
        width: SCREEN_WIDTH,
    },
    BoxImage: {
        // borderWidth: 1,
        marginTop: 50,
    },
    Image: {
        width: SCREEN_WIDTH,
        height: sizeWidth(105),
        resizeMode: 'stretch',
    },
    BoxText: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 30,
    },
    BoxFooter: {
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    Circle: {
        width: 10,
        height: 10,
        backgroundColor: color.background4,
        borderRadius: 13 / 2,
        marginRight: 15,
    },
    CicleActive: {
        width: 18,
        backgroundColor: color.mainColor,
    },
    BoxCircle: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: sizeWidth(20),
    },
    Btn: {
        backgroundColor: color.mainColor,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 10,
    },
});
