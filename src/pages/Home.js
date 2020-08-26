import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Headers/HeaderHome';
import { color } from '../assets/colors/color';

export default function Home() {
    return (
        <View style={styles.Container}>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
});
