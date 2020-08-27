/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { sizeWidth } from '../../assets/responsive/Size';

export default function Carousal({ data = [] }) {
    return (
        <View style={styles.Container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ flexDirection: 'row', paddingHorizontal: 8 }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxImage}>
                                    <Image style={{
                                        resizeMode: 'contain',
                                        width: sizeWidth(88),
                                        height: sizeWidth(32),
                                    }} source={item.image} />
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // paddingHorizontal: 5.5,
    },
    BoxImage: {
        // borderWidth: 1,
        width: sizeWidth(88),
        borderRadius: 7,
        overflow: 'hidden',
        margin: 8,
    },
});
