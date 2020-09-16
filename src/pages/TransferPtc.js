/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderMetode';
import TranferPTC from '../components/TransferPtc/TransferPTC';
import TransferTiket from '../components/TransferPtc/TransferTiket';
import { Poppins } from '../assets/fonts/Poppins';
import { sizeFont } from '../assets/responsive/Size';

const dataTitle = ['Transfer PTC', 'Transfer Ticket'];


export default function TransferPtc({ navigation }) {

    const dataPages = [
        <TranferPTC navigation={navigation} />,
        <TransferTiket navigation={navigation} />,
    ];
    const [indeOf, setIndex] = useState(0);

    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Transfer'} />
            <View style={styles.BoxHead}>
                {
                    dataTitle.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setIndex(index)}
                                activeOpacity={0.6}
                                key={index}
                                style={[
                                    styles.BoxListHead,
                                    indeOf === index &&
                                    {
                                        borderBottomWidth: 3,
                                        borderBottomColor: color.border4,
                                    }]}
                            >
                                <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            {dataPages[indeOf]}
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    BoxHead: {
        flexDirection: 'row',
        backgroundColor: color.mainColor,
    },
    BoxListHead: {
        flex: 2,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
    },
});
