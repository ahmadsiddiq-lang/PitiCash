/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';

export default function TransferPTC() {

    const [value, setValue] = useState(null);

    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.Image} source={require('../../assets/images/PTC/IconPTC.png')} />
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.3) }}>Jumlah PTC</Text>
                </View>
                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>137 PTC</Text>
            </View>
            <View style={styles.BoxInput}>
                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Username Penerima</Text>
                <TextInput style={styles.Input} />
            </View>
            <View style={styles.BoxInput}>
                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Jumlah Transfer</Text>
                <TextInput onFocus={() => setValue(null)} value={value} keyboardType="numeric" style={styles.Input} />
            </View>
            <View style={styles.BoxInstan}>
                {
                    [10, 25, 50, 100].map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => setValue(item.toString())} activeOpacity={0.6} key={index} style={styles.Instan}>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2, fontFamily: Poppins.Medium }}>{item} PTC</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                <Text style={{ color: color.fontWhite, fontSize: sizeFont(4), fontFamily: Poppins.Medium }}>Proses</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    Head: {
        borderWidth: 1,
        borderColor: color.border1,
        borderRadius: 8,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(6),
        height: sizeWidth(6),
        marginRight: 10,
    },
    BoxInput: {
        marginTop: 25,
    },
    Input: {
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        padding: 0,
    },
    BoxInstan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    Instan: {
        borderWidth: 0.5,
        borderColor: color.border1,
        borderRadius: 10,
        paddingHorizontal: sizeWidth(4),
        paddingVertical: 5,
    },
    Btn: {
        backgroundColor: color.mainColor,
        borderRadius: 8,
        paddingVertical: 5,
        alignItems: 'center',
        marginTop: 20,
    },
});
