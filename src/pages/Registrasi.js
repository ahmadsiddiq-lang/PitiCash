/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, CheckBox, Button } from 'react-native';
import Header from '../components/Headers/HeaderMetode';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';
import { sizeFont, SCREEN_WIDTH } from '../assets/responsive/Size';

export default function Registrasi({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Registrasi Developer'} />
            <ScrollView>
                <View style={styles.Head}>
                    <View style={styles.ContentHead}>
                        <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Piti Cash</Text>
                        <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Rp. 780.000</Text>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Upline</Text>
                        <TextInput value={'Ahmad Siddiq'} style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Posisi</Text>
                        <TextInput value={'Kiri'} style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Piti Cash</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Rp. </Text>
                            <TextInput keyboardType="numeric" placeholder="Nominal" style={[styles.Input, { width: '100%', paddingLeft: 10 }]} />
                        </View>
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Username</Text>
                        <TextInput placeholder="Masukkan username" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Full Name</Text>
                        <TextInput placeholder="Masukkan nama lengkap" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>No. Handphone</Text>
                        <TextInput keyboardType="phone-pad" placeholder="Masukkan nomor handphone" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Email</Text>
                        <TextInput autoCapitalize="none" keyboardType="email-address" placeholder="Masukkan email" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Bank Account</Text>
                        <TextInput placeholder="Masukkan rekening bank" style={styles.Input} />
                    </View>
                    <View style={styles.BoxCheckBox}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <View style={styles.BoxSyarat}>
                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Saya menyetujui <Text style={{ color: color.mainColor }}>Syarat & ketentuan </Text>yang berlaku</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BoxBtn}>
                    <Button title="Simpan" color={color.mainColor} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    Head: {
        // borderWidth: 1,
        padding: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    ContentHead: {
        // borderWidth: 1,
        backgroundColor: color.background3,
        borderRadius: 5,
        padding: 8,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Content: {
        paddingHorizontal: 20,
    },
    BoxList: {
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        marginBottom: 20,
        flex: 1,
    },
    Input: {
        // borderWidth: 1,
        padding: 0,
        letterSpacing: 0.5,
        fontSize: sizeFont(3),
        // fontFamily: Poppins.Medium,
    },
    BoxCheckBox: {
        // borderWidth: 1,
        width: SCREEN_WIDTH - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    BoxSyarat: {
        display: 'flex',
        // flex: 1,
        flexWrap: 'nowrap',
        width: '90%',
        // borderWidth: 1,
        marginLeft: 10,
    },
    BoxBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
    },
});
