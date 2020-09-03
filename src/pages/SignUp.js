/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { color } from '../assets/colors/color';
import Content from '../components/GlobalComponent/BgContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';


export default function SignUp({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={styles.BtnBack}>
                    <Ionicons name="arrow-back-outline" size={25} color={color.borderWhite} />
                </TouchableOpacity>
                <Text style={{ color: color.fontWhite, fontSize: sizeFont(7), fontFamily: Poppins.Bold }}>Piti Cash</Text>
            </View>
            <Content content={[
                <ContentSignUp navigation={navigation} />,
            ]} />
        </View>
    );
}

const ContentSignUp = ({ navigation }) => {
    return (
        <View style={styles.BoxContentLogin}>
            <Text style={{ fontSize: sizeFont(6), fontFamily: Poppins.Bold }}>Sign Up</Text>
            <View style={styles.BoxInput}>
                <View style={styles.BoxContentInput}>
                    <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Hanphone</Text>
                    <View style={styles.BoxInputItem}>
                        <Image style={styles.IconInput} source={require('../assets/images/Handphone.png')} />
                        <TextInput placeholder="Masukkan No. Handphone" style={styles.Input} />
                    </View>
                </View>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.navigate('SplashRegister')} activeOpacity={0.6} style={styles.BtnLogin}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: sizeFont(3.3) }}>Sudah mempunyai akun ? <Text onPress={() => navigation.navigate('Login')} style={{ color: color.mainColor }}>Login</Text></Text>
            </View>
            <View />
        </View>
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
    },
    BoxContentLogin: {
        // borderWidth: 1,
        marginTop: 50,
        paddingHorizontal: 20,
    },
    BoxContentInput: {
        marginBottom: 20,
    },
    BoxInput: {
        // borderWidth: 1,
        marginTop: 30,
    },
    IconInput: {
        width: sizeWidth(5),
        height: sizeWidth(5),
    },
    Input: {
        // borderWidth: 1,
        padding: 0,
        width: '95%',
        paddingLeft: 10,
        letterSpacing: 0.8,
        fontSize: sizeFont(3.5),
    },
    BoxInputItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        paddingBottom: 10,
        justifyContent: 'space-between',
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
