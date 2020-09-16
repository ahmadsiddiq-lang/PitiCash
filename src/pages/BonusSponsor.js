import React from 'react';
import { StyleSheet, View } from 'react-native';
import Headers from '../components/Headers/Headers';
import Content from '../components/BonusSponsor/Content';

export default function BonusSponsor({ navigation }) {
    return (
        <View style={styles.Container}>
            <Headers navigation={navigation} title={'Bonus Sponsor'} />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
