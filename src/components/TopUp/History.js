/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
import { color } from '../../assets/colors/color';

export default function History() {
    return (
        <View style={styles.Container}>
            <Text style={{
                padding: 10,
                paddingHorizontal: 20,
                fontSize: sizeFont(3.5),
                fontFamily: Poppins.Medium,
            }}>History Top Up</Text>
            <View style={styles.BoxContent}>
                <View style={styles.BoxHead}>
                    <Image style={styles.ImageKalender} source={require('../../assets/images/kalender.png')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: sizeFont(3.3), color: color.mainColor }}>20 Juni 2020</Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: color.mainColor }}> - </Text>
                        <Text style={{ fontSize: sizeFont(3.3), color: color.mainColor }}>20 Juni 2020</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.BoxContentHistory}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <View key={index} style={styles.BoxList}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={styles.ImageDompet} source={require('../../assets/images/DompetTrans.png')} />
                                            <View>
                                                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Top Up</Text>
                                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>24 Juni 2020, 12:56</Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>+ 20.00</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    BoxContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
    },
    BoxHead: {
        borderWidth: 1,
        borderColor: color.border1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    ImageKalender: {
        resizeMode: 'contain',
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginBottom: 5,
    },
    ImageDompet: {
        resizeMode: 'contain',
        width: sizeWidth(6),
        height: sizeWidth(6),
        marginRight: 10,
    },
    BoxContentHistory: {
        // borderWidth: 1,
        marginTop: 10,
        flex: 1,
    },
    BoxList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        paddingBottom: 10,
        marginVertical: 10,
    },
});
