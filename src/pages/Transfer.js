import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from '../components/Transfer/Content';
import { color } from '../assets/colors/color';

export default function Transfer() {
    return (
        <View style={styles.Container}>
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
});
