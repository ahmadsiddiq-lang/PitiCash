import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Headers/Headers';
import Content from '../components/BonusReward/Content';
import { color } from '../assets/colors/color';

export default function BonusReward() {

    const [data, setData] = useState(0);

    return (
        <View style={styles.Container}>
            <Header title={'Bonus Rewarad'} />
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
