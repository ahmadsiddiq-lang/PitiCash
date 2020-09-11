/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { color } from '../assets/colors/color';
import Content from '../components/GlobalComponent/BgContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeFont, sizeWidth, SCREEN_WIDTH } from '../assets/responsive/Size';
import { Poppins, Fredoka } from '../assets/fonts/Poppins';


export default function SplashResset({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={styles.BtnBack}>
                    <Ionicons name="arrow-back-outline" size={25} color={color.borderWhite} />
                </TouchableOpacity>
                <Text style={{ color: color.fontWhite, fontSize: sizeFont(7), fontFamily: Fredoka.Regular }}>Piti Cash</Text>
            </View>
            <Content content={[
                <ContentSplash navigation={navigation} />,
            ]} />
        </View>
    );
}

const ContentSplash = ({ navigation }) => {
    return (
        <View style={styles.BoxContentLogin}>
            <Text style={{ fontSize: sizeFont(6), fontFamily: Fredoka.Regular }}>Reset Password</Text>
            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.3) }}>silahkan buka email anda, kami telah mengirim email ke <Text style={{ fontFamily: Poppins.Medium, color: color.fontBlack }}>john.doe@gmail.com</Text> untuk mengatur ulang password.</Text>
            <View style={styles.BoxImage}>
                <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../assets/images/Login/SplashResset.png')} />
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.6} style={styles.BtnLogin}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Ok</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: sizeFont(3.3) }}>belum menerima email ? <Text onPress={() => navigation.navigate('ResetPass')} style={{ color: color.mainColor }}>Kirim Ulang</Text></Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
    Head: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: sizeWidth(15),
        marginBottom: 30,
    },
    BtnBack: {
        marginRight: 20,
        position: 'absolute',
        left: 20,
        padding: 8,
        paddingLeft: 0,
    },
    BoxContentLogin: {
        // borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    BoxImage: {
        // borderWidth: 1,
        width: '100%',
        height: sizeWidth(80),
    },
    Footer: {
        marginVertical: 30,
    },
    BtnLogin: {
        backgroundColor: color.mainColor,
        alignItems: 'center',
        padding: 8,
        borderRadius: 7,
        marginBottom: 20,
    },
});
