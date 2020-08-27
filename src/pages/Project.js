import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderProject';
import Content from '../components/GlobalComponent/BgContent';

export default function Project() {
    return (
        <View style={styles.Container}>
            <Header />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
});
