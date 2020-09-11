/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH, sizeWidth, sizeFont } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';

export default function Banner({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxBanner}>
                <View style={styles.Head}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={{ padding: 5 }}>
                        <Ionicons name="chevron-back" size={30} color={color.fontWhite} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={{ padding: 5 }}>
                        <Ionicons name="share-social" size={30} color={color.fontWhite} />
                    </TouchableOpacity>
                </View>
                <Image style={{ resizeMode: 'contain', width: SCREEN_WIDTH, height: '100%' }} source={require('../../assets/images/GambarProject.png')} />
            </View>
            <View style={styles.BoxTextBanner}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 20 }}>Bersama Membangun Smarty Mart di seluruh Indonesia</Text>
                {/* <View style={styles.BarLine}>
                    <View style={styles.LineBg} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5) }}>Target</Text>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5) }}>Closing</Text>
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>1000 PTC</Text>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>30 Juli 2020</Text>
                </View>
            </View>
            <View style={styles.Line} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        backgroundColor: color.background1,
    },
    BoxBanner: {
        // borderWidth: 1,
        overflow: 'hidden',
        height: sizeWidth(54),
    },
    Head: {
        // borderWidth: 1,
        position: 'absolute',
        top: 0,
        height: 50,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
        paddingHorizontal: 20,
    },
    BoxTextBanner: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    BarLine: {
        // borderWidth: 1,
        height: sizeWidth(2),
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: color.background4,
        marginVertical: 10,
    },
    LineBg: {
        height: '100%',
        backgroundColor: color.mainColor,
        width: '60%',
        borderRadius: 10,
    },
    Line: {
        height: sizeWidth(1.5),
        // borderWidth: 1,
        backgroundColor: color.background3,
    },
});
