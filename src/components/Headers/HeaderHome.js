/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HeaderHome() {

    const [ActiveCircle, setCircle] = useState(true);

    return (
        <View style={styles.Container}>
            <View style={styles.BoxContent}>
                <View style={styles.ContainerAvatar}>
                    <View style={styles.BoxAvatar}>
                        <Image style={{ resizeMode: 'contain', width: sizeWidth(10.5), height: sizeWidth(10.5) }} source={require('../../assets/images/User.png')} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: color.fontWhite }}>Selamat datang,</Text>
                        <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(4) }}>Jhone Doe</Text>
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <View style={styles.Circle} />
                    <FontAwesome name="bell" color={color.background1} size={25} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        // borderWidth: 1,
        height: sizeWidth(20),
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    BoxContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    ContainerAvatar: {
        flexDirection: 'row',
    },
    BoxAvatar: {
        width: sizeWidth(10.5),
        height: sizeWidth(10.5),
        borderRadius: sizeWidth(10.5),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.borderWhite,
    },
    Circle: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: color.mainColor,
        position: 'absolute',
        zIndex: 2,
        right: 0,
    },
});
