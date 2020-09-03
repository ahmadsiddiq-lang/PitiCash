/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dataSaldoPiti = [
    { cash: '280.000' },
];

const PembayaranINstan = [
    { image: require('../../assets/images/MetodePembayaran/OVO.png'), text: 'Ovo Cash' },
    { image: require('../../assets/images/MetodePembayaran/gopay.png'), text: 'GoPay' },
    { image: require('../../assets/images/MetodePembayaran/dana.png'), text: 'Dana' },
];

const VirtualAccount = [
    { image: require('../../assets/images/MetodePembayaran/bca.png'), text: 'Bank BCA' },
    { image: require('../../assets/images/MetodePembayaran/mandiri.png'), text: 'Bank Mandiri' },
    { image: require('../../assets/images/MetodePembayaran/bri.png'), text: 'Bank BRI' },
    { image: require('../../assets/images/MetodePembayaran/bni.png'), text: 'Bank BNI' },
];

export default function Content({ navigation }) {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 10, flex: 1 }}>
                    <TamPlateList
                        title={'Saldo Piti Cash'}
                        dataSaldo={dataSaldoPiti}
                        navigation={navigation}
                    />
                    <TamPlateList
                        title={'Pembayaran Instan'}
                        dataSaldo={PembayaranINstan}
                        navigation={navigation}
                    />
                    <TamPlateList
                        title={'Virtual Account'}
                        dataSaldo={VirtualAccount}
                        navigation={navigation}
                    />
                    <TamPlateList
                        title={'Transfer Bank'}
                        dataSaldo={VirtualAccount}
                        navigation={navigation}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const TamPlateList = ({ dataSaldo = [], title, navigation }) => {
    return (
        <View style={styles.Content}>
            <View style={styles.BoxHead}>
                <Text style={{ fontFamily: Poppins.Medium }}>{title}</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                {
                    dataSaldo.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Transfer')} key={index} style={styles.BoxLIst}>
                                {
                                    item.cash ?
                                        <View style={styles.Avatar}>
                                            <Ionicons name="wallet" size={sizeFont(6)} color={color.fontWhite} />
                                        </View> :
                                        <Image style={styles.Image} source={item.image} />
                                }
                                {
                                    item.cash ?
                                        <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.3) }}>Piti Cash <Text style={{ color: color.fontBlack }}>Rp. {item.cash}</Text></Text> :

                                        <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.3) }}>{item.text}</Text>
                                }
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Content: {
        // borderWidth: 1,
        flex: 1,
    },
    BoxHead: {
        backgroundColor: color.background4,
        paddingHorizontal: 20,
    },
    BoxLIst: {
        flex: 1,
        // borderWidth: 1,
        // paddingHorizontal: 20,
        // backgroundColor: '',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        paddingVertical: 10,
    },
    Avatar: {
        // borderWidth: 1,
        overflow: 'hidden',
        borderRadius: sizeWidth(10) / 2,
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginRight: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(8),
        height: sizeWidth(8),
        marginRight: 10,
    },
});
