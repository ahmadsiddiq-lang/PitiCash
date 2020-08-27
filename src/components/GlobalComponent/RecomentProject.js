/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from '../../assets/colors/color';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';

const data = [
    { image: require('../../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../../assets/images/Project2.png'), persen: '30%', rp: '250.000.000', date: '01 Agustus 2020' },
    { image: require('../../assets/images/Project3.png'), persen: '60%', rp: '250.000.000', date: '10 Agustus 2020' },
];

export default function Rekomendasi() {
    return (
        <View style={styles.Container}>
            {
                data.map((item, index) => {
                    return (
                        <View key={index} style={styles.BoxList}>
                            <View style={styles.BoxImage}>
                                <Image style={{ resizeMode: 'stretch', width: '100%', height: '100%' }} source={item.image} />
                            </View>
                            <View style={styles.BoxContentRight}>
                                <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>Bersam membangun Smarty Mart</Text>
                                <View style={styles.BoxBg}>
                                    <View style={[styles.BoxUp, { width: item.persen }]} />
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginTop: 5 }}>Target</Text>
                                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginTop: 5 }}>Closing</Text>
                                </View>
                                <View style={styles.BoxDate}>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3) }}>Rp. {item.rp}</Text>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(2.5) }}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 10,
    },
    BoxList: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
    },
    BoxImage: {
        // width: sizeWidth(38),
        height: sizeWidth(20),
        overflow: 'hidden',
        borderRadius: 7,
        flex: 2,
        borderWidth: 0.5,
        borderColor: color.border1,
    },
    BoxContentRight: {
        marginLeft: 20,
        flex: 3,
    },
    BoxBg: {
        // borderWidth: 0.5,
        height: 5,
        borderRadius: 7,
        backgroundColor: color.background3,
    },
    BoxUp: {
        // width: '40%',
        height: '100%',
        backgroundColor: color.mainColor,
        borderRadius: 7,
    },
    BoxDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
