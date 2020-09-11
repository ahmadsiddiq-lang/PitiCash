/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native';
import Header from '../components/Headers/HeaderHome';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';
import Content from '../components/GlobalComponent/BgContent';
import PitiCash from '../components/Home/PitiCash';
import ActivitasTerbaru from '../components/Home/ActivitasTerbaru';
import Rekomendasi from '../components/Home/Rekomendasi';
import Carousal from '../components/GlobalComponent/Carousal';
import { SCREEN_WIDTH, sizeFont } from '../assets/responsive/Size';
import { CarousalHOme } from '../DataDummy';


const BoxCarousal = () => {
    return (
        <View style={styles.BoxCarousal}>
            <View style={styles.BoxHead}>
                <Text style={{ fontFamily: Poppins.Medium }}>Info & Promo</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            <Carousal data={CarousalHOme} />
        </View>
    );
};

export default function Home({ navigation }) {
    let currentCount = 0;
    const handleBack = () => {
        if (currentCount < 1) {
            currentCount += 1;
            ToastAndroid.showWithGravity(
                'Press again to close',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else {
            // exit the app here using BackHandler.exitApp();
            BackHandler.exitApp();
        }
        setTimeout(() => {
            currentCount = 0;
        }, 2000);
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            handleBack();
            return true;
        });
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => {
                handleBack();
                return true;
            });
        };
    }, []);
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} />
            <Content content={[
                <PitiCash navigation={navigation} />,
                <ActivitasTerbaru navigation={navigation} />,
                <View style={styles.Line} />,
                <Rekomendasi navigation={navigation} />,
                <BoxCarousal />,
            ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
    Line: {
        width: SCREEN_WIDTH,
        height: 5,
        backgroundColor: color.background3,
        marginVertical: 10,
    },
    BoxCarousal: {
        marginTop: 10,
    },
    BoxHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
