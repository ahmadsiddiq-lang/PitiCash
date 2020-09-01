/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { color } from '../../assets/colors/color';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';


export default function PemberiDana({ navigation, handleSheetActive }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxUp}>
                <Text>PemberiDana</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={{ color: color.mainColor }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Content}>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <View key={index} style={styles.BoxList}>
                                <View style={styles.BoxAvatar}>
                                    <Image style={{ resizeMode: 'contain', width: sizeWidth(10), height: sizeWidth(10) }} source={require('../../assets/images/User.png')} />
                                </View>
                                <View>
                                    <Text style={{ color: color.mainColor, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Jhon Doe</Text>
                                    <Text style={{ marginRight: 10, color: color.fontBody2, fontSize: sizeFont(3) }}>Memberi dana sebesar <Text style={{ color: color.fontBlack, fontFamily: Poppins.Medium }}>Rp. 4.500.000</Text></Text>
                                </View>
                            </View>
                        );
                    })
                }
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => handleSheetActive()} activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>INVESTASI SEKARANG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    BoxUp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Content: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    BoxList: {
        flexDirection: 'row',
        backgroundColor: color.background3,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    BoxAvatar: {
        // borderWidth: 1,
        width: sizeWidth(10),
        height: sizeWidth(10),
        borderRadius: sizeWidth(13),
        overflow: 'hidden',
        backgroundColor: color.background3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    Footer: {
        borderTopWidth: 0.5,
        borderColor: color.border1,
        padding: 10,
    },
    Btn: {
        backgroundColor: color.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10,
    },
});
