/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';

export default function PitiCash({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Content}>
                <View style={styles.BoxUp}>
                    <View style={styles.BoxLeft}>
                        <View style={styles.BoxImage}>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(5), height: sizeWidth(5) }} source={require('../../assets/images/PTC/Dompet.png')} />
                        </View>
                        <Text style={{ lineHeight: 20 }}>Piti Cash</Text>
                    </View>
                    <Text style={{ lineHeight: 20, fontFamily: Poppins.Medium, fontSize: sizeFont(3.7) }}>Rp. 2.800.000</Text>
                </View>
                <View style={styles.BoxBootom}>
                    <View style={styles.BoxBottomPiti}>
                        <View style={styles.BoxImage}>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(5), height: sizeWidth(5) }} source={require('../../assets/images/PTC/IconTiket.png')} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ lineHeight: 20, fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>49 Tiket</Text>
                            <Text style={{ lineHeight: 20, color: color.fontBody2, fontSize: sizeFont(3) }}>Jumlah Tiket</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: color.mainColor, height: '100%' }} />
                    <View style={styles.BoxBottomPiti}>
                        <View style={styles.BoxImage}>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(5), height: sizeWidth(5) }} source={require('../../assets/images/PTC/IconPTC.png')} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ lineHeight: 20, fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>137 PTC</Text>
                            <Text style={{ lineHeight: 20, color: color.fontBody2, fontSize: sizeFont(3) }}>Jumlah PTC</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.BoxAction}>
                <TouchableOpacity onPress={() => navigation.navigate('TopUp')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                    <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/TopUp.png')} />
                    <Text style={{ fontSize: sizeFont(3.5) }}>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Registrasi')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                    <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/Registrasi.png')} />
                    <Text style={{ fontSize: sizeFont(3.5) }}>Registrasi</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TransferPtc')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                    <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/Transfer.png')} />
                    <Text style={{ fontSize: sizeFont(3.5) }} > Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                    <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/History.png')} />
                    <Text style={{ fontSize: sizeFont(3.5) }}> History</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    Content: {
        borderRadius: 7,
        backgroundColor: color.background2,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    BoxUp: {
        borderBottomWidth: 1,
        borderBottomColor: color.mainColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10,
    },
    BoxLeft: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    BoxImage: {
        width: sizeWidth(5),
        height: sizeWidth(5),
        overflow: 'hidden',
        marginRight: 10,
        // borderWidth: 1,
    },
    BoxBootom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    BoxBottomPiti: {
        flex: 2,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    BoxAction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 15,
    },
});
