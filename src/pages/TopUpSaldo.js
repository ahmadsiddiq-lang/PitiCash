/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from '../assets/colors/color';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';
import Header from '../components/Headers/HeaderMetode';
import { Poppins } from '../assets/fonts/Poppins';

export default function TopUpSaldo({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Top Up'} />
            <View style={styles.BoxContent}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Saldo Piti Cash</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Total Saldo</Text>
                    <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>20 PTC</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>No. Telpon</Text>
                    <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>08123456778</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Nominal Top Up</Text>
                    <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>Rp. 100.000</Text>
                </View>
            </View>
            <View style={styles.Line} />
            <View style={styles.BoxPembayaran}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Pembayaran</Text>
                    <Text onPress={() => navigation.navigate('MetodePembayaran')} style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Ubah</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{
                        resizeMode: 'contain',
                        width: sizeWidth(15),
                        marginRight: 20,
                    }} source={require('../assets/images/MetodePembayaran/bca.png')} />
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.5) }}>BCA Virtual Account</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    BoxContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Line: {
        backgroundColor: color.background3,
        height: 8,
    },
    BoxPembayaran: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
