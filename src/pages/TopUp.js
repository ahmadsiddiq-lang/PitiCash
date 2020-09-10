import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeadTopUp from '../components/Headers/HeadTopUp';
import PitiCash from '../components/TopUp/PitiCash';
import History from '../components/TopUp/History';
import { color } from '../assets/colors/color';

export default function TopUp({ navigation }) {
    return (
        <View style={styles.Container}>
            <HeadTopUp navigation={navigation} title={'Top Up'} />
            <PitiCash navigation={navigation} />
            <History />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
});
