import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';


export default function HeaderSearch({ setHeader }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxContent}>
                <TouchableOpacity onPress={() => setHeader(e => !e)} activeOpacity={0.6} style={styles.BtnSearch}>
                    <Ionicons name="arrow-back" size={25} color={color.background1} />
                </TouchableOpacity>
                <TextInput autoFocus={true} selectionColor={color.background1} placeholder="Search..." style={styles.Input} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // height: sizeWidth(15),
        // borderWidth: 1,
        justifyContent: 'center',
    },
    BoxContent: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#47ffe9',
    },
    BtnSearch: {
        // borderWidth: 1,
        padding: 5,
    },
    Input: {
        // borderWidth: 1,
        width: '90%',
        fontSize: sizeFont(4),
        letterSpacing: 0.9,
        color: color.fontWhite,
        // fontFamily: Poppins.Medium,
    },
});
