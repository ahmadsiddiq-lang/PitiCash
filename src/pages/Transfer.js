import React from 'react';
import { StyleSheet, View } from 'react-native';
import Content from '../components/Transfer/Content';
import { color } from '../assets/colors/color';

export default function Transfer({ navigation }) {
    return (
        <View style={styles.Container}>
            <Content navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
});
