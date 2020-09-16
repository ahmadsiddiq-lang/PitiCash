import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { color } from '../assets/colors/color';
import { SCREEN_WIDTH, sizeFont, sizeWidth } from '../assets/responsive/Size';
import { Poppins, Fredoka } from '../assets/fonts/Poppins';
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.BoxImageBack}>
                <ImageBackground style={styles.ImageBack} source={require('../assets/images/Login/Login.png')} />
            </View>
            <View style={styles.BoxText}>
                <Text style={styles.Title}>Piti Cash</Text>
            </View>
            <View style={styles.BoxBtn}>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('Login'))} activeOpacity={0.6} style={styles.BtnUp}>
                    <Text style={{ color: color.mainColor, fontSize: sizeFont(4), fontFamily: Poppins.Bold }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('SignUp'))} activeOpacity={0.6} style={styles.BtnDown}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(4), fontFamily: Poppins.Bold }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
    BoxImageBack: {
        position: 'absolute',
        // borderWidth: 1,
        width: SCREEN_WIDTH,
        // height: 100,
        bottom: 0,
        alignItems: 'center',
    },
    ImageBack: {
        resizeMode: 'contain',
        width: sizeWidth(80),
        height: sizeWidth(80),
        opacity: 0.3,
        // position: 'absolute',
        // bottom: 0,
        // left: sizeWidth(80) / 4,
    },
    BoxText: {
        width: SCREEN_WIDTH,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        color: color.fontWhite,
        fontSize: sizeFont(12),
        fontFamily: Fredoka.Regular,
    },
    BoxBtn: {
        width: SCREEN_WIDTH,
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
    },
    BtnUp: {
        // borderWidth: 1,
        alignItems: 'center',
        padding: 8,
        borderRadius: 7,
        backgroundColor: color.background1,
    },
    BtnDown: {
        alignItems: 'center',
        padding: 5,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: color.background1,
        marginTop: 10,
    },
});
