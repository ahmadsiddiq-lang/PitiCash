import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
import { color } from '../../assets/colors/color';

const data = [
    { text: 'Qui mollit labore laboris sit commodo aliquip id ut' },
    { text: 'Deserunt tempor sunt ullamco ullamco labore ' },
    { text: 'mollit sunt ullamco ullamco labore exercitation ea' },
    { text: 'Qui labore sit aliquip commodo aliquip id ut' },
    { text: 'Qui labore laboris sit commodo id ut laboris' },
    { text: 'Qui labore laboris sit commodo aliquip id ut aliquip id' },
    { text: 'Qui mollit labore laboris sit commodo id ut labore' },
];

export default function SyaratKetentuan() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Syarat & Ketentuan</Text>
            <View style={styles.Content}>
                {
                    data.map((item, index) => {
                        return (
                            <Text key={index} style={{ fontSize: sizeFont(3), color: color.fontBody2, paddingVertical: 5 }}>{index + 1 + '. ' + item.text}</Text>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
    },
    Content: {
        paddingHorizontal: 20,
    },
    Title: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        fontSize: sizeFont(3.5),
        fontFamily: Poppins.Medium,
    },
});
