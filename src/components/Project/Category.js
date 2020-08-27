/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';

const data = [
    { image: require('../../assets/images/IconKategori1.png'), title: 'Makanan' },
    { image: require('../../assets/images/IconKategori2.png'), title: 'Teknologi' },
    { image: require('../../assets/images/IconKategori3.png'), title: 'Industri' },
    { image: require('../../assets/images/IconKategori4.png'), title: 'Semua' },
];

export default function Category() {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxList}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} style={{ alignItems: 'center' }}>
                                <View key={index} style={styles.BoxImage}>
                                    <Image style={{
                                        resizeMode: 'contain',
                                        width: sizeWidth(13),
                                        height: sizeWidth(13),
                                    }} source={item.image} />
                                </View>
                                <Text style={{ fontSize: sizeFont(3) }}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // borderWidth: 1,
        marginTop: 15,
    },
    BoxList: {
        // borderWidth: 1,
        // paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxImage: {
        // borderWidth: 1,
        overflow: 'hidden',
        width: sizeWidth(13),
        height: sizeWidth(13),
        borderRadius: sizeWidth(13) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
});
