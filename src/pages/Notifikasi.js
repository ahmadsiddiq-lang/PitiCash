/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderMetode';
import { SCREEN_WIDTH, sizeWidth, sizeFont } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';
import { color } from '../assets/colors/color';

const dataBanne = [
    { image: require('../assets/images/Banner1.png') },
    { image: require('../assets/images/Banner2.png') },
    { image: require('../assets/images/Banner1.png') },
    { image: require('../assets/images/Banner2.png') },
];


export default function Notifikasi({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Notifikasi'} />
            <ScrollView>
                <View style={styles.Content}>
                    {
                        dataBanne.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('DetailNotifikasi')} key={index} style={styles.ListContent}>
                                    <View style={styles.BoxBanner}>
                                        <Image style={styles.ImageBanner} source={item.image} />
                                    </View>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5), color: color.fontBlack, marginTop: 10 }}>Ayo Berinvestasi Untuk Jaminan Masa Depan</Text>
                                    <Text numberOfLines={2} style={{ color: color.fontBlack, fontSize: sizeFont(3) }}>Eu mollit minim voluptate qui magna ad do ullamco tempor ipsum ea. Consequat est proident nulla et commodo excepteur. Veniam fugiat laboris ea fugiat nulla enim sint non. Dolore fugiat ex cupidatat labore esse magna sunt aliqua qui eu aliquip minim. </Text>
                                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginTop: 10 }}>Berlaku sampai 31 Juli 2020</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Content: {
        paddingVertical: 10,
    },
    ListContent: {
        marginVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        paddingBottom: 10,
    },
    BoxBanner: {
        // borderWidth: 1,
        height: sizeWidth(34),
        overflow: 'hidden',
        borderRadius: 8,
    },
    ImageBanner: {
        resizeMode: 'contain',
        width: SCREEN_WIDTH - 40,
        height: sizeWidth(33.5),
    },
});
