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
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(5), height: sizeWidth(5) }} source={require('../../assets/images/Dompet.png')} />
                        </View>
                        <Text style={{ lineHeight: 20 }}>Piti Cash</Text>
                    </View>
                    <Text style={{ lineHeight: 20, fontFamily: Poppins.Medium, fontSize: sizeFont(3.7) }}>PTC. 1.000</Text>
                </View>
                <View style={styles.BoxBootom}>
                    <TouchableOpacity onPress={() => navigation.navigate('TopUp')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                        <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/TopUp.png')} />
                        <Text style={{ fontSize: sizeFont(3.5) }}>Top Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Transfer')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                        <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/Transfer.png')} />
                        <Text style={{ fontSize: sizeFont(3.5) }} > Transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('History')} style={{ alignItems: 'center' }} activeOpacity={0.6} >
                        <Image style={{ resizeMode: 'contain', width: sizeWidth(8), height: sizeWidth(8) }} source={require('../../assets/images/History.png')} />
                        <Text style={{ fontSize: sizeFont(3.5) }}> History</Text>
                    </TouchableOpacity>
                </View>
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
});
