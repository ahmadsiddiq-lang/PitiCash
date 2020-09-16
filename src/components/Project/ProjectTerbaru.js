/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, SCREEN_WIDTH, sizeWidth } from '../../assets/responsive/Size';
import { CarListProject } from '../../DataDummy';

export default function ProjectTerbaru() {
    return (
        <View style={styles.Container}>
            <View style={styles.Head}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Project Terbaru</Text>
                <TouchableOpacity>
                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <View style={styles.Content}>
                    {
                        CarListProject.length > 0 && (
                            CarListProject.map((item, index) => {
                                return (
                                    <View key={index} style={styles.BoxList}>
                                        <View style={styles.BoxImage}>
                                            <Image style={{ resizeMode: 'stretch', height: sizeWidth(30), width: '100%' }} source={item.image} />
                                        </View>
                                        <View style={styles.ContentListCard}>
                                            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, marginBottom: 20 }}>Bersama membangun Smarty MArt</Text>
                                            {/* <View style={styles.BoxBg}>
                                                <View style={[styles.BoxUp, { width: '60%' }]} />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Target</Text>
                                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Closing</Text>
                                            </View> */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>1000 PTC</Text>
                                                <Text>30 Juli 2020</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        )
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        marginVertical: 10,
    },
    Head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        // borderWidth: 1,
    },
    Content: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    BoxList: {
        borderWidth: 0.5,
        borderColor: '#b5b5b5',
        width: SCREEN_WIDTH / 1.3,
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 10,
    },
    BoxImage: {
        // borderWidth: 1,
        overflow: 'hidden',
        // height: 100,
    },
    ContentListCard: {
        padding: 10,
    },
    BoxBg: {
        // borderWidth: 0.5,
        height: 8,
        borderRadius: 7,
        backgroundColor: color.background3,
        marginVertical: 5,
    },
    BoxUp: {
        // width: '40%',
        height: '100%',
        backgroundColor: color.mainColor,
        borderRadius: 7,
    },
});
