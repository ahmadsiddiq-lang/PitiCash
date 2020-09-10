/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';
import { SCREEN_WIDTH, sizeWidth, sizeFont } from '../assets/responsive/Size';
import Banner from '../components/DetailNotifikasi/Banner';
import SyaratKetentuan from '../components/DetailNotifikasi/SyaratKetentuan';

export default function DetailPromo({ navigation }) {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner navigation={navigation} />
                <SyaratKetentuan navigation={navigation} />
            </ScrollView>
            <View style={styles.BoxFooter}>
                <TouchableOpacity activeOpacity={0.6} style={styles.BtnLihat}>
                    <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Lihat Project</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    BtnLihat: {
        // borderWidth: 1,
        backgroundColor: color.mainColor,
        marginBottom: 10,
        padding: 8,
        borderRadius: 7,
        alignItems: 'center',
    },
    BoxFooter: {
        paddingHorizontal: 20,
    },
});
