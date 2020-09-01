/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { color } from '../../assets/colors/color';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Poppins } from '../../assets/fonts/Poppins';

export default function Info() {
    return (
        <View style={styles.Container}>
            <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5), marginHorizontal: 20, paddingVertical: 10 }}>Informasi Pencari Dana</Text>
            <View style={styles.BoxInfo}>
                <View style={styles.BoxProfile}>
                    <View style={styles.BoxUp}>
                        <View style={styles.BoxAvatar}>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(10), height: sizeWidth(10) }} source={require('../../assets/images/User.png')} />
                        </View>
                        <View>
                            <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Mark Anthony</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginRight: 10 }}>Akun sudah terverifikasi</Text>
                                <View style={styles.BoxStatus}>
                                    <Ionicons name="checkmark" color={color.fontWhite} size={sizeFont(2)} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BoxValidasi}>
                        <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Info pencari dana tervalidasi</Text>
                        <Text style={{ fontSize: sizeFont(2.5), color: color.fontBody2 }}>Tim kami telah memeriksa kebenaran dokumen pendukung</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Line} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: color.background1,
    },
    BoxInfo: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    BoxProfile: {
        borderWidth: 1,
        borderColor: color.border1,
        borderRadius: 8,
        padding: 15,
    },
    BoxUp: {
        flexDirection: 'row',
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
    BoxStatus: {
        backgroundColor: color.mainColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 2,
        width: sizeWidth(3.5),
        height: sizeWidth(3.5),
    },
    BoxValidasi: {
        backgroundColor: color.background2,
        padding: 10,
        marginTop: 10,
        borderRadius: 7,
    },
    Line: {
        height: sizeWidth(1.5),
        // borderWidth: 1,
        backgroundColor: color.background3,
    },
});
