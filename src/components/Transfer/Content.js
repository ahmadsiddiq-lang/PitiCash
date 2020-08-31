/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Transition, Transitioning } from 'react-native-reanimated';
import Clipboard from '@react-native-community/clipboard';

const dataArray = [
    {
        title: 'ATM BCA', content: [
            '1. Masukkan kartu ATM',
            '2. Pilih menu Transaksi Lainnya > Transfer > Ke Rekening Virtual Account',
            '3. Masukkan 807757657657657 sebagai nomor Virtual Account',
            '4. Masukkan jumlah yang harus di bayar',
            '5. Ikuti intruksi untuk menyelesaikan transaksi',
        ],
    },
    {
        title: 'Mobile banking BCA', content: [
            '1. Masukkan kartu ATM',
            '2. Pilih menu Transaksi Lainnya > Transfer > Ke Rekening Virtual Account',
            '3. Masukkan 807757657657657 sebagai nomor Virtual Account',
            '4. Masukkan jumlah yang harus di bayar',
            '5. Ikuti intruksi untuk menyelesaikan transaksi',
        ],
    },
    {
        title: 'Internet banking BCA', content: [
            '1. Masukkan kartu ATM',
            '2. Pilih menu Transaksi Lainnya > Transfer > Ke Rekening Virtual Account',
            '3. Masukkan 807757657657657 sebagai nomor Virtual Account',
            '4. Masukkan jumlah yang harus di bayar',
            '5. Ikuti intruksi untuk menyelesaikan transaksi',
        ],
    },
];

export default function Content() {
    const ref = useRef();
    const [curentIndex, setCurentIndex] = useState(null);

    const copyNoVirtual = () => {
        Clipboard.setString('807757657657657');
        ToastAndroid.showWithGravity(
            'Salin',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };
    const copyJumlahBayar = () => {
        Clipboard.setString('290000');
        ToastAndroid.showWithGravity(
            'Salin',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };

    const transitions = (
        <Transition.Together>
            <Transition.In type="fade" durationMs={200} />
            <Transition.Change />
            <Transition.Out type="fade" durationMs={200} />
        </Transition.Together>
    );

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    <View style={styles.BoxUp}>
                        <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Transfer ke nomor Virtual Account</Text>
                        <View style={styles.BoxList}>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Nama Bank</Text>
                            <View style={styles.BoxItemList}>
                                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.3) }}>BCA</Text>
                                <Image style={styles.Image} source={require('../../assets/images/bca.png')} />
                            </View>
                        </View>
                        <View style={styles.BoxList}>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Nomor Virtual Account</Text>
                            <View style={styles.BoxItemList}>
                                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.3), paddingVertical: 5 }}>088927938649827</Text>
                                <TouchableOpacity onPress={() => copyNoVirtual()} activeOpacity={0.6}>
                                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Salin</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.BoxList}>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Jumlah yang harus di bayar</Text>
                            <View style={styles.BoxItemList}>
                                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.3), paddingVertical: 5 }}>Rp 200.000</Text>
                                <TouchableOpacity onPress={() => copyJumlahBayar()} activeOpacity={0.6}>
                                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Salin</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Line} />
                    <View style={styles.BoxAlert}>
                        <Text style={{ fontSize: sizeFont(3) }}>Lakukan pembayaran sebelum <Text style={{ fontFamily: Poppins.Medium }}>04 Agustus 2020, 15:16</Text> atau investasi kamu dibatalkan oleh sistem.</Text>
                    </View>
                    <Transitioning.View
                        ref={ref}
                        transition={transitions}
                        style={styles.BoxPanudan}>
                        <Text style={{ marginHorizontal: 20, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Panduan Pembayaran</Text>
                        {
                            dataArray.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity
                                            activeOpacity={0.6}
                                            onPress={() => {
                                                ref.current.animateNextTransition();
                                                setCurentIndex(curentIndex !== index ? index : null);
                                            }}
                                            style={styles.BoxListPanduan}
                                        >
                                            <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                                            {
                                                curentIndex === index ?
                                                    <Ionicons name="chevron-up" size={sizeFont(5)} /> :
                                                    <Ionicons name="chevron-down" size={sizeFont(5)} />
                                            }
                                        </TouchableOpacity>
                                        {
                                            curentIndex === index &&
                                            <View style={styles.BoxDrafPanduan}>
                                                {
                                                    item.content.map((itemsub, i) => {
                                                        return (
                                                            <Text key={i} style={{ fontSize: sizeFont(3.3), marginTop: 10 }}>{itemsub}</Text>
                                                        );
                                                    })
                                                }
                                            </View>
                                        }
                                    </View>
                                );
                            })
                        }
                    </Transitioning.View>
                </View>
            </ScrollView>
            <View style={styles.Footer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.BtnInves}>
                    <Text style={{ color: color.borderWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>CEK INVESTASI</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.BtnKembali}>
                    <Text style={{ color: color.mainColor, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>KEMBALI KE PROJECT</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    BoxUp: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    BoxList: {
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        marginVertical: 5,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(10),
    },
    BoxItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Line: {
        backgroundColor: color.background3,
        height: 8,
    },
    BoxAlert: {
        backgroundColor: color.background2,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    BoxPanudan: {
        marginTop: 15,
    },
    BoxListPanduan: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxDrafPanduan: {
        backgroundColor: color.background3,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Footer: {
        padding: 10,
        paddingHorizontal: 20,
    },
    BtnInves: {
        padding: 8,
        backgroundColor: color.mainColor,
        borderRadius: 7,
        // marginTop: 15,
        alignItems: 'center',
    },
    BtnKembali: {
        padding: 8,
        borderWidth: 1,
        borderColor: color.mainColor,
        borderRadius: 7,
        marginTop: 15,
        alignItems: 'center',
    },
});
