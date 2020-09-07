import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Header from '../components/Headers/HeaderMetode';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';
import { sizeFont } from '../assets/responsive/Size';

export default function Registrasi({ navigation }) {
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
                        <TextInput placeholder="Nominal" value={'100.000'} style={styles.Input} />
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
                        <TextInput placeholder="Masukkan nomor handphone" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Email</Text>
                        <TextInput placeholder="Masukkan email" style={styles.Input} />
                    </View>
                    <View style={styles.BoxList}>
                        <Text style={{ color: color.fontBody2 }}>Bank Account</Text>
                        <TextInput placeholder="Masukkan rekening bank" style={styles.Input} />
                    </View>
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
        letterSpacing: 1,
        fontSize: sizeFont(3.5),
        // fontFamily: Poppins.Medium,
    },
});
