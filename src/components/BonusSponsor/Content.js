/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Head() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = () => {
        setShow(Platform.OS === 'ios');
    };


    const showDatepicker = () => {
        setShow(true);
    };
    return (
        <View style={styles.Container}>
            <View style={styles.BoxContent}>
                <Image style={styles.Image} source={require('../../assets/images/kalender.png')} />
                <View style={styles.BoxRight}>
                    <TouchableOpacity onPress={showDatepicker} activeOpacity={0.6}>
                        <Text style={{ color: color.mainColor }}>27 Agustus 2020</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 5, color: color.mainColor }}>-</Text>
                    <TouchableOpacity onPress={showDatepicker} activeOpacity={0.6}>
                        <Text style={{ color: color.mainColor }}>27 Agustus 2020</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.BoxLisContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxList}>
                                    <View style={styles.BoxItem}>
                                        <Image style={styles.ImageDompet} source={require('../../assets/images/DompetTrans.png')} />
                                        <View style={styles.BoxText}>
                                            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Bonus Sponsor 30% PC from Yogara99 </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: color.fontBody2 }}>24-05-2020, 12:59</Text>
                                                <Text style={{ color: color.mainColor }}>3:00</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: color.background1,
    },
    BoxContent: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 15,
        borderColor: color.border1,
        marginTop: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(6),
    },
    BoxRight: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'flex-end',
    },
    BoxLisContent: {
        // borderWidth: 1,
        paddingTop: 10,
        flex: 1,
        paddingBottom: 20,
    },
    BoxList: {
        // borderWidth: 1,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        paddingVertical: 10,
        marginBottom: 10,
    },
    ImageDompet: {
        resizeMode: 'contain',
        width: sizeWidth(6),
        marginRight: 15,
    },
    BoxItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        // borderWidth: 1,
    },
    BoxText: {
        // borderWidth: 1,
        flex: 3,
    },
});
