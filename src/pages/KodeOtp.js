/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { color } from '../assets/colors/color';
import Content from '../components/GlobalComponent/BgContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';
import { Poppins, Fredoka } from '../assets/fonts/Poppins';
import { StackActions } from '@react-navigation/native';

export default function KodeOtp({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={styles.BtnBack}>
                    <Ionicons name="arrow-back-outline" size={25} color={color.borderWhite} />
                </TouchableOpacity>
                <Text style={{ color: color.fontWhite, fontSize: sizeFont(7), fontFamily: Fredoka.Regular }}>Piti Cash</Text>
            </View>
            <Content content={[
                <ContentKodeOtp navigation={navigation} />,
            ]} />
        </View>
    );
}

const ContentKodeOtp = ({ navigation }) => {
    const [indexOf, setIndex] = useState(null);

    const inputRefs = Array(5).fill(React.createRef());

    const goNextAfterEdit = (e, index) => {
        // console.log(e);
        if (e > 0) {
            if (index < inputRefs.length - 1) {
                inputRefs[index + 1].focus();
            }
        }
        // else if (index > 0 || e === 0) {
        //     inputRefs[index - 1].focus();
        // }
    };
    return (
        <View style={styles.BoxContentLogin}>
            <Text style={{ fontSize: sizeFont(6), fontFamily: Fredoka.Regular }}>Sign Up</Text>
            <Text style={{ fontSize: sizeFont(3.3), marginVertical: 20, color: color.fontBody2 }}>Masukkan kode verifikasi yang telah dikirim melalui SMS ke nomor <Text style={{ fontFamily: Poppins.Medium, color: color.fontBlack }}>0812****0876</Text></Text>
            <View style={styles.BOxContent}>
                <View style={styles.BoxItem}>
                    {
                        inputRefs.map((item, index) => {
                            return (
                                <TextInput key={index}
                                    onChangeText={(e) => goNextAfterEdit(e, index)}
                                    ref={r => inputRefs[index] = r}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    onFocus={() => setIndex(index)}
                                    selectionColor={color.background2}
                                    style={[styles.TextInput, {
                                        borderColor: indexOf === index ? color.mainColor : color.fontBody3,
                                    }]} />
                            );
                        })
                    }
                </View>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('Login'))} activeOpacity={0.6} style={styles.BtnLogin}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Verifikasi</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'left', fontSize: sizeFont(3.3) }}>Tidak menerima kode ? <Text style={{ color: color.mainColor }}>Kirim ulang</Text></Text>
            </View>
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
        padding: 8,
        paddingLeft: 0,
    },
    BoxContentLogin: {
        // borderWidth: 1,
        marginTop: 50,
        paddingHorizontal: 20,
    },
    BOxContent: {
        // borderWidth: 1,
        marginTop: 30,
    },
    BoxItem: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TextInput: {
        borderWidth: 2,
        borderColor: color.border2,
        width: '15%',
        borderRadius: 7,
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Poppins.Bold,
        fontSize: sizeFont(5),
        paddingBottom: 5,
        paddingTop: 10,
    },
    Footer: {
        marginVertical: 30,
        marginTop: 50,
    },
    BtnLogin: {
        backgroundColor: color.mainColor,
        alignItems: 'center',
        padding: 8,
        borderRadius: 7,
        marginBottom: 20,
    },
});
