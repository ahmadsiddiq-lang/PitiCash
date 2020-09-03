import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderMetode from '../components/Headers/HeaderMetode';
import Content from '../components/MetodePembayaran/Content';

export default function MetodePembayaran({ navigation }) {
    return (
        <View style={styles.Container}>
            <HeaderMetode navigation={navigation} title={'Metode Pembayaran'} />
            <Content navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
