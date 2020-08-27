/* eslint-disable react-native/no-inline-styles */
import React, { version } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';

const data = [
    { title: 'Urutkan', image: require('../../assets/images/MyProject/icon1.png') },
    { title: 'Filter', image: require('../../assets/images/MyProject/icon2.png') },
    { title: 'Kategory', image: require('../../assets/images/MyProject/icon3.png') },
];

const dataList = [
    { image: require('../../assets/images/Project1.png'), rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../../assets/images/Project2.png'), rp: '250.000.000', date: '01 Agustus 2020' },
    { image: require('../../assets/images/Project3.png'), rp: '250.000.000', date: '10 Agustus 2020' },
];

export default function Content() {
    return (
        <View style={styles.Container}>
            <View style={styles.head}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={index} style={styles.BoxItem}>
                                <Image style={styles.Image} source={item.image} />
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <View style={styles.Content}>
                {
                    dataList.map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxList}>
                                <View style={styles.BoxImage}>
                                    <Image style={{ resizeMode: 'stretch', width: '100%', height: '100%' }} source={item.image} />
                                </View>
                                <View style={styles.BoxContentRight}>
                                    <View style={styles.BoxText}>
                                        <Text style={{ fontFamily: Poppins.Medium }}>Bersam membangun Smarty Mart</Text>
                                        <View style={styles.BoxPrice}>
                                            <View style={styles.boxTgl}>
                                                <Text style={{ fontSize: sizeFont(2.5) }}>{item.date}</Text>
                                            </View>
                                            <View style={styles.BoxRp}>
                                                <Text style={{ fontFamily: Poppins.Medium, marginLeft: 8 }}>Rp. {item.rp}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.Btn}>
                                        <Text style={{ color: color.mainColor, fontSize: sizeFont(2.5) }}>Berhasil</Text>
                                    </TouchableOpacity>
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
    },
    head: {
        // borderWidth: 1,
        flexDirection: 'row',
    },
    BoxItem: {
        borderWidth: 0.5,
        borderColor: color.border1,
        // height: sizeWidth(20),
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(5),
    },
    Content: {
        // borderWidth: 1,
        padding: 20,
    },
    BoxList: {
        flexDirection: 'row',
        paddingBottom: 15,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        marginBottom: 10,
    },
    BoxImage: {
        height: sizeWidth(15),
        overflow: 'hidden',
        borderRadius: 7,
        flex: 1.2,
        borderWidth: 0.5,
        borderColor: color.border1,
    },
    BoxContentRight: {
        marginLeft: 10,
        flex: 2.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
    },
    BoxText: {
        // borderWidth: 1,
        width: '68%',
        justifyContent: 'space-between',
    },
    Btn: {
        borderWidth: 1,
        borderColor: color.mainColor,
        borderRadius: 10,
        height: sizeWidth(6),
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BoxPrice: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        // maxWidth: sizeWidth(30),
    },
    boxTgl: {
        // borderWidth: 1,
        width: sizeWidth(22),
    },
    BoxRp: {
        // borderWidth: 1,
        // maxWidth: sizeWidth(40),
    },
});
