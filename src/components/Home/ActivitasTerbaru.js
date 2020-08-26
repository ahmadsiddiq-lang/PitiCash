/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { sizeWidth, SCREEN_WIDTH, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';

const data = [
    { image: require('../../assets/images/icon1.png'), color: '#a99cff', title: 'Referral Bonus', qty: '18.00' },
    { image: require('../../assets/images/icon2.png'), color: '#ff9494', title: 'Pairing Bonus', qty: '13.00' },
    { image: require('../../assets/images/icon3.png'), color: '#ff94bd', title: 'Limit Bonus', qty: '346.95' },
    { image: require('../../assets/images/icon4.png'), color: '#94c6ff', title: 'Total Bonus', qty: '42.65' },
    { image: require('../../assets/images/icon5.png'), color: '#94ff96', title: 'Bonus Bayar', qty: '52.00' },
    { image: require('../../assets/images/icon6.png'), color: '#ffda94', title: 'Profit', qty: '11.65' },
];

export default function ActivitasTerbaru() {
    return (
        <View style={styles.Container}>
            <Text style={{ padding: 10, fontFamily: Poppins.Medium }}>Activitas Terbaru</Text>
            <View style={styles.Content}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.BoxLIst, { borderColor: item.color }]}>
                                <View style={[styles.BoxLeftColor, { backgroundColor: item.color }]} />
                                <View style={styles.BoxImage}>
                                    <Image style={{
                                        width: sizeWidth(10),
                                        height: sizeWidth(10),
                                        borderRadius: sizeWidth(10),
                                    }} source={item.image} />
                                </View>
                                <View style={styles.BOxText}>
                                    <Text numberOfLines={1} style={{ color: item.color, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                                    <Text numberOfLines={1} style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.qty}</Text>
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
        // borderWidth: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    Content: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    BoxLIst: {
        borderWidth: 0.5,
        // borderColor: color.mainColor,
        height: sizeWidth(15),
        minWidth: SCREEN_WIDTH / 3,
        overflow: 'hidden',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    BoxLeftColor: {
        width: '3%',
        height: '100%',
        // backgroundColor: color.mainColor,
        marginRight: 10,
    },
    BoxImage: {
        // borderWidth: 1,
        width: sizeWidth(10),
        height: sizeWidth(10),
        borderRadius: sizeWidth(10),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    BOxText: {
        // borderWidth: 1,
        maxWidth: sizeWidth(26),
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: 'column',
    },
});
