import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from '../components/Headers/Headers';
import Content from '../components/BonusPairing/Content';

export default function BonusPairing({ navigation }) {
    return (
        <View style={styles.Container}>
            <Headers navigation={navigation} title={'Bonus Pairing'} />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
