import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeadTopUp from '../components/Headers/HeadTopUp';
import PitiCash from '../components/TopUp/PitiCash';
import History from '../components/TopUp/History';

export default function TopUp({ navigation }) {
    return (
        <View style={styles.Container}>
            <HeadTopUp navigation={navigation} title={'Top Up'} />
            <PitiCash />
            <History />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
