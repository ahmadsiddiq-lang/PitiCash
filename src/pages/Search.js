import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../assets/colors/color';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';

export default function Search({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <TouchableHighlight
                    underlayColor={color.fontBody3}
                    onPress={() => navigation.goBack()}
                    // activeOpacity={0.6}
                    style={styles.Btn}>
                    <Ionicons name="arrow-back-outline" size={25} color={color.fontBody2} />
                </TouchableHighlight>
                <TextInput autoFocus={true} style={styles.Input} placeholder="Search..." />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    Head: {
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        height: sizeWidth(15),
        alignItems: 'center',
        flexDirection: 'row',
    },
    Btn: {
        // borderWidth: 1,
        padding: 10,
        marginLeft: 10,
        borderRadius: 50,
    },
    Input: {
        // borderWidth: 1,
        width: '85%',
        fontSize: sizeFont(4),
        letterSpacing: 0.8,
    },
});
