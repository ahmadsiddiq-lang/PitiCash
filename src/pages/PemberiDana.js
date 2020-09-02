/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Headers/Headers';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';
import { color } from '../assets/colors/color';

const data = [
    { image: require('../assets/images/users/User1.png') },
    { image: require('../assets/images/users/User2.png') },
    { image: require('../assets/images/users/User3.png') },
    { image: require('../assets/images/users/User4.png') },
];

export default function PemberiDana({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Pemberi Dana'} />
            <View style={styles.Contain}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 20 }}>Total Pemberi Dana ({data.length})</Text>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxList}>
                                <View style={styles.BoxImage}>
                                    <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={item.image} />
                                </View>
                                <View>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5), color: color.mainColor }}>Jhon Smith</Text>
                                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Memberi dana sebesar <Text style={{ color: color.fontBlack, fontFamily: Poppins.Medium }}>Rp. 45.000</Text></Text>
                                </View>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    Contain: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    BoxList: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: color.background3,
        padding: 8,
        borderRadius: 7,
    },
    BoxImage: {
        // borderWidth: 1,
        width: sizeWidth(13),
        height: sizeWidth(13),
        borderRadius: sizeWidth(20) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginRight: 15,
    },
});
