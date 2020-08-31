/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
    return (
        <View style={styles.Container}>
            <Header />
            <Content content={[
                <PitiCash navigation={navigation} />,
                <ActivitasTerbaru />,
                <View style={styles.Line} />,
                <Rekomendasi />,
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
