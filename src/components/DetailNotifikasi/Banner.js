/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { SCREEN_WIDTH, sizeWidth, sizeFont } from '../../assets/responsive/Size';

export default function Banner({ navigation }) {

    const [lineText, setLineText] = useState(false);

    return (
        <View style={styles.Container}>
            <View style={styles.BoxBanner}>
                <View style={styles.Head}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={{ padding: 5 }}>
                        <Ionicons name="arrow-back" size={30} color={color.fontWhite} />
                    </TouchableOpacity>
                </View>
                <Image style={{ resizeMode: 'stretch', width: SCREEN_WIDTH, height: '100%' }} source={require('../../assets/images/Banner1.png')} />
            </View>
            <View style={styles.ContentBanner}>
                <View style={styles.BoxCenter}>
                    <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Mulai Investasi di Piti Cash Untuk Jaminan Masa Depan</Text>
                    <View style={styles.BoxDate}>
                        <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Berlaku hingga</Text>
                        <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>30 Juli 2020</Text>
                    </View>
                </View>
                <View style={styles.BOxTextBanner}>
                    {
                        lineText ?
                            <Text numberOfLines={0} style={{ textAlign: 'justify', color: color.fontBody2, fontSize: sizeFont(3) }}>Qui mollit labore laboris sit commodo aliquip id ut in enim pariatur officia. Deserunt tempor sunt ullamco ullamco labore exercitation ea anim pariatur nisi irure. Elit do irure proident nulla duis ad. Veniam enim cupidatat duis est eiusmod occaecat do ad cillum adipisicing quis nisi laboris aliqua. Est consequat consectetur esse ipsum voluptate.</Text> :
                            <Text numberOfLines={3} style={{ textAlign: 'justify', color: color.fontBody2, fontSize: sizeFont(3) }}>Qui mollit labore laboris sit commodo aliquip id ut in enim pariatur officia. Deserunt tempor sunt ullamco ullamco labore exercitation ea anim pariatur nisi irure. Elit do irure proident nulla duis ad. Veniam enim cupidatat duis est eiusmod occaecat do ad cillum adipisicing quis nisi laboris aliqua. Est consequat consectetur esse ipsum voluptate.</Text>
                    }
                    <TouchableOpacity onPress={() => setLineText(e => !e)} style={styles.BoxLihat}>
                        <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Line} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {},
    BoxBanner: {
        overflow: 'hidden',
        height: sizeWidth(36),
        // borderWidth: 1,
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
    ContentBanner: {
        // borderWidth: 1,
        padding: 20,
    },
    BoxCenter: {
        borderWidth: 1.5,
        borderColor: color.border1,
        marginTop: -50,
        backgroundColor: color.background1,
        padding: 10,
        borderRadius: 8,
    },
    BoxDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: color.border1,
        paddingTop: 10,
    },
    BOxTextBanner: {
        // borderWidth: 1,
        marginTop: 15,
    },
    BoxLihat: {
        alignItems: 'flex-end',
        marginTop: 5,
    },
    Line: {
        height: 8,
        backgroundColor: color.background3,
    },
});
