import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Headers/HeaderMetode';
import { sizeWidth, sizeFont } from '../assets/responsive/Size';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';

export default function DetailMyProject({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Detail Project'} />
            <View style={styles.ContentUp}>
                <View style={styles.BoxImage}>
                    <Image style={styles.Image} source={require('../assets/images/Project1.png')} />
                </View>
                <View style={styles.BoxText}>
                    <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Investasi dengan resiko rendah Smarty Coffee</Text>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Makanan</Text>
                    <TouchableOpacity style={styles.BtnLihat}>
                        <Text style={{ color: color.fontWhite }}>Lihat Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.BoxContent}>
                <View style={styles.BoxTextContent}>
                    <View style={styles.ListContent}>
                        <View style={styles.Boxleft}>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Tanggal</Text>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Metode Pembayaran</Text>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>No. Investasi</Text>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Jumlah Investasi</Text>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Lihat Bonus</Text>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3), marginTop: 10 }}>Status</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>31 Agustus 2020 - 09:30</Text>
                            <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>BCA Virtual Account</Text>
                            <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>0928409273049</Text>
                            <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>PTC. 100</Text>
                            <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>1203.00</Text>
                            <View style={styles.Berhasil}>
                                <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Berhasil</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    ContentUp: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        // flexWrap: 'nowrap',

    },
    BoxImage: {
        // borderWidth: 1,
        width: sizeWidth(40),
        height: sizeWidth(23),
        overflow: 'hidden',
        borderRadius: 8,
        marginRight: 10,
    },
    Image: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },
    BoxText: {
        // borderWidth: 1,
        flex: 2,
    },
    BtnLihat: {
        backgroundColor: color.mainColor,
        width: '50%',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    Line: {
        height: 8,
        backgroundColor: color.background3,
    },
    BoxContent: {
        // borderWidth: 1,
        padding: 20,
    },
    BoxTextContent: {
        borderWidth: 1,
        borderColor: color.border1,
        padding: 10,
        borderRadius: 8,
    },
    ListContent: {
        flexDirection: 'row',
    },
    Boxleft: {
        // borderWidth: 1,
        marginRight: 40,
    },
    Berhasil: {
        borderColor: color.mainColor,
        borderWidth: 1,
        borderRadius: 7,
        width: sizeWidth(20),
        alignItems: 'center',
        marginTop: 10,
    },
});
