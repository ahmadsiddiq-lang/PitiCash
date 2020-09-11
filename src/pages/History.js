/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Headers/HeaderMetode';
import { color } from '../assets/colors/color';
import { sizeFont } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';

const data = [
    {
        date: '01 September 2020', sub: [
            { pembayaran: 'Pembayaran Investasi #0298340297', pengeluaran: '100.000' },
            { pembayaran: 'Pembayaran Investasi #0298340297', pengeluaran: '100.000' },
            { pembayaran: 'Piti Cash TopUp', pemasukkan: '100.000' },
        ],
    },
    {
        date: '30 Agustus 2020', sub: [
            { pembayaran: 'Pembayaran Investasi #0298340297', pengeluaran: '100.000' },
            { pembayaran: 'Piti Cash TopUp', pemasukkan: '100.000' },
            { pembayaran: 'Pembayaran Investasi #0298340297', pengeluaran: '100.000' },
        ],
    },
];

export default function History({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'History'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.BoxContent}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.Content}>
                                    <View style={styles.Date}>
                                        <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, color: color.fontBody2, padding: 3 }}>01 September 2020</Text>
                                    </View>
                                    {
                                        item.sub.map((itemSub, indexSub) => {
                                            return (
                                                <View style={{ paddingHorizontal: 20 }} key={indexSub}>
                                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.3), paddingVertical: 10 }}>{itemSub.pembayaran}</Text>
                                                    {
                                                        itemSub.pemasukkan ?
                                                            <View style={styles.BoxBottom}>
                                                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Pemasukkan</Text>
                                                                <Text style={{ color: color.mainColor }}>Rp 100.000</Text>
                                                            </View> :
                                                            <View style={styles.BoxBottom}>
                                                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Pengeluaran</Text>
                                                                <Text style={{ color: color.fontRed }}>-Rp 100.000</Text>
                                                            </View>
                                                    }
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    BoxContent: {
        flex: 1,
    },
    Content: {
        // borderWidth: 1,
        flex: 1,
    },
    Date: {
        backgroundColor: color.background3,
        paddingHorizontal: 20,
    },
    BoxBottom: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
