import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';


export default function HeaderMyProject({ setHeader }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxContent}>
                <Text style={{ fontSize: sizeFont(4), fontFamily: Poppins.Medium, color: color.fontWhite }}>My Project</Text>
                <TouchableOpacity onPress={() => setHeader(e => !e)} activeOpacity={0.6} style={styles.BtnSearch}>
                    <Ionicons name="search" size={sizeFont(6)} color={color.background1} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height: sizeWidth(15),
        // borderWidth: 1,
        justifyContent: 'center',
    },
    BoxContent: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    BtnSearch: {
        // borderWidth: 1,
        padding: 5,
    },
});
