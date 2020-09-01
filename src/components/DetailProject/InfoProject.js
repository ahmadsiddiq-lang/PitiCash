/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';

export default function InfoProject() {

    const [LineText, setText] = useState(false);

    return (
        <View style={styles.Container}>
            <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, paddingHorizontal: 20, paddingVertical: 5, marginTop: 10 }}>Informasi Project</Text>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.2) }}>Tingkat Bunga</Text>
                    <Text style={{ fontSize: sizeFont(3.2), fontFamily: Poppins.Medium }}>20%</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.2) }}>Tingkat Risiko</Text>
                    <Text style={{ fontSize: sizeFont(3.2), fontFamily: Poppins.Medium }}>Risiko Rendah</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(3.2) }}>Jangka Waktu</Text>
                    <Text style={{ fontSize: sizeFont(3.2), fontFamily: Poppins.Medium }}>180 Hari</Text>
                </View>
            </View>
            <View style={styles.BoxDescript}>
                <Text style={{ fontSize: sizeFont(3.5), fontFamily: Poppins.Medium, paddingVertical: 5 }}>Deskripsi Project</Text>
                {
                    LineText ?
                        <Text numberOfLines={0} style={{ textAlign: 'justify', color: color.fontBody2, fontSize: sizeFont(3) }}>Deserunt anim consequat consectetur veniam qui culpa laboris commodo deserunt. In incididunt deserunt enim nostrud adipisicing reprehenderit anim. Qui laboris consequat tempor enim consectetur excepteur. adipisicing reprehenderit anim. Qui laboris consequat tempor enim consectetur excepteur.</Text> :
                        <Text numberOfLines={4} style={{ textAlign: 'justify', color: color.fontBody2, fontSize: sizeFont(3) }}>Deserunt anim consequat consectetur veniam qui culpa laboris commodo deserunt. In incididunt deserunt enim nostrud adipisicing reprehenderit anim. Qui laboris consequat tempor enim consectetur excepteur. adipisicing reprehenderit anim. Qui laboris consequat tempor enim consectetur excepteur.</Text>
                }
                <Text onPress={() => setText(LineText ? false : true)} style={{ marginTop: 10, color: color.mainColor, fontSize: sizeFont(3.3) }}>Lihat Detail</Text>
            </View>
            <View style={styles.Line} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
        // marginBottom: 20,
    },
    BoxDescript: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    Line: {
        height: sizeWidth(1.5),
        // borderWidth: 1,
        backgroundColor: color.background3,
    },
});
