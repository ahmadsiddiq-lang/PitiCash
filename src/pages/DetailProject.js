/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Switch, TouchableOpacity } from 'react-native';
import Banner from '../components/DetailProject/Banner';
import Info from '../components/DetailProject/Info';
import InfoProject from '../components/DetailProject/InfoProject';
import PemberiDana from '../components/DetailProject/PemberiDana';
import RBSheet from 'react-native-raw-bottom-sheet';
import { sizeFont, sizeWidth, sizeHeight } from '../assets/responsive/Size';
import { color } from '../assets/colors/color';
import { Poppins } from '../assets/fonts/Poppins';


export default function DetailProject({ navigation }) {

    const refRBSheet = useRef();

    const [dataSheet, setDataSheet] = useState(null);

    const handleSheetActive = (index) => {
        // setDataSheet(index);
        refRBSheet.current.open();
        console.log('masuk');
    };

    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner navigation={navigation} />
                <Info navigation={navigation} />
                <InfoProject navigation={navigation} />
                <PemberiDana handleSheetActive={() => handleSheetActive()} navigation={navigation} />
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={sizeHeight(48)}
                animationType="fade"
                customStyles={{
                    wrapper: {
                        // backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: color.border1,
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                <ComponetSheet dataForSheet={dataSheet} />
            </RBSheet>
        </View>
    );
}

const ComponetSheet = ({ dataForSheet }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Masukkan Nominal Investasi</Text>
            <View style={styles.BoxContentUp}>
                <View style={styles.BoxInput}>
                    <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium }}>Rp. </Text>
                    <TextInput keyboardType="numeric" textAlign={'right'} style={styles.Input} />
                </View>
                <Text style={{ fontSize: sizeFont(2.8), marginTop: 10, color: color.fontBody2, fontFamily: Poppins.Italic }}>* Minimal investasi Rp. 100.000</Text>
            </View>
            <View style={styles.BoxCOntentSheet}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Metode Pembayaran</Text>
                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Ubah</Text>
                </View>
                <View style={styles.BoxMetode}>
                    <Image style={styles.ImageBank} source={require('../assets/images/MetodePembayaran/bca.png')} />
                    <Text style={{ color: color.fontBody2 }}>Virtual Account BCA</Text>
                </View>
                <View style={styles.BoxSwitch}>
                    <Text style={{ color: color.fontBody2 }}>Sembunyikan nama Saya</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: color.background6 }}
                        thumbColor={isEnabled ? color.mainColor : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.BOxBtn}>
                <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                    <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.5) }}>LANJUTKAN PEMBAYARAN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    BoxContentUp: {
        paddingHorizontal: 20,
    },
    BoxInput: {
        // borderWidth: 1,
        padding: 5,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color.background3,
        borderRadius: 7,
        overflow: 'hidden',
    },
    Input: {
        // borderWidth: 1,
        width: '85%',
        padding: 0,
        fontFamily: Poppins.Medium,
        fontSize: sizeFont(4.5),
    },
    BoxCOntentSheet: {
        // borderWidth: 1,
        marginTop: 15,
    },
    BoxMetode: {
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    ImageBank: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(10),
        marginRight: 10,
    },
    BoxSwitch: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
        // height: 20,
    },
    BOxBtn: {
        // borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    Btn: {
        marginTop: 20,
        padding: 10,
        borderRadius: 7,
        backgroundColor: color.mainColor,
        alignItems: 'center',
    },
});
