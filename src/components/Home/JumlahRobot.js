import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { SCREEN_WIDTH, sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';

export default function JumlahRobot() {
    return (
        <View style={styles.Container}>
            <ImageBackground style={styles.ImageBack} source={require('../../assets/images/Group7.png')}>
                <View style={styles.Content}>
                    <View style={styles.Head}>
                        <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium }}>Jumlah RObot</Text>
                        <View style={styles.BoxQtyRobot}>
                            <Text style={{ fontSize: sizeFont(3.3), color: color.fontWhite }}>50 Robot</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.BoxListContent}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => {
                                    return (
                                        <View key={index} style={styles.BoxList}>
                                            <View>
                                                <Text style={{ fontSize: sizeFont(3.3) }}>Distribusi Stack</Text>
                                                <Text style={{ fontSize: sizeFont(3.3), color: color.fontBody2 }}>20:00</Text>
                                            </View>
                                            <Text style={{ fontSize: sizeFont(3.3), color: color.mainColor }}>49.00</Text>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingVertical: 10,
    },
    ImageBack: {
        resizeMode: 'contain',
        width: SCREEN_WIDTH,
        height: sizeWidth(115),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 72,
        paddingBottom: 15,
    },
    Content: {
        width: '100%',
        height: '100%',
        backgroundColor: color.background1,
        borderRadius: 8,
        padding: 15,
    },
    Head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    BoxQtyRobot: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: color.mainColor,
        borderRadius: 8,
    },
    BoxList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: color.border1,
        paddingVertical: 3,
        marginTop: 13,
    },
    BoxListContent: {
        // width: '100%',
        // height: 300,
    },
});
