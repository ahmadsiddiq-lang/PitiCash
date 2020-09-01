/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
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
                height={sizeHeight(40)}
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
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Masukkan Nominal Investasi</Text>
            <View style={styles.BoxContentUp}>
                <View style={styles.BoxInput}>
                    <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium }}>Rp. </Text>
                    <TextInput keyboardType="numeric" textAlign={'right'} style={styles.Input} />
                </View>
                <Text>* Minimal investasi Rp. 100.000</Text>
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
});
