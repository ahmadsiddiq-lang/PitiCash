/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';
import { sizeFont, sizeWidth } from '../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <Text style={{ color: color.fontWhite, fontSize: sizeFont(4), fontFamily: Poppins.Medium }}>Profile</Text>
                <View style={styles.ContainerAvatar}>
                    <View style={styles.BoxAvatar}>
                        <Image style={{ resizeMode: 'contain', width: sizeWidth(10.5), height: sizeWidth(10.5) }} source={require('../assets/images/User.png')} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(4) }}>Jhone Doe</Text>
                        <Text style={{ color: color.fontWhite, fontSize: sizeFont(3) }}>Developer</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Akun}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Akun</Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.BoxList}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconUbahProfile.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Ubah Profile</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Reaferals')} activeOpacity={0.6} style={styles.BoxList}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconNetwork.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Network</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.BoxList}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconRekening.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Rekening Bank</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.Withdraw}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconWithdraw.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Withdraw</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Akun}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Keamanan</Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.Withdraw}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconPassword.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Ubah Password</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Akun}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Tentang</Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.BoxList}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/Panduan.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Panduan Piti Cash</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.BoxList}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconSyarat.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Syarat & Ketentuan</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.Withdraw}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.ImageList} source={require('../assets/images/Profile/IconKebijakan.png')} />
                            <Text style={{ fontSize: sizeFont(3.3) }}>Kebiajakan Privasi</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={sizeFont(4)} color={color.fontBody3} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Footer}>
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(3.8) }}>Sign Out</Text>
                    </TouchableOpacity>
                    <Text style={{ color: color.fontBody2, textAlign: 'center', fontSize: sizeFont(2.7) }}>Version 1.0</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Head: {
        backgroundColor: color.mainColor,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    ContainerAvatar: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    BoxAvatar: {
        width: sizeWidth(10.5),
        height: sizeWidth(10.5),
        borderRadius: sizeWidth(10.5),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.borderWhite,
    },
    Akun: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: color.background1,
        marginBottom: 7,
    },
    BoxList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        paddingBottom: 10,
        marginVertical: 5,
    },
    Withdraw: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingBottom: 10,
        marginVertical: 5,
    },
    ImageList: {
        resizeMode: 'contain',
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: 20,
    },
    Footer: {
        backgroundColor: color.background1,
        paddingHorizontal: 20,
        paddingVertical: 35,
    },
    Btn: {
        backgroundColor: color.mainColor,
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 8,
        marginBottom: 15,
    },
});
