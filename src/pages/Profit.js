import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from '../components/Headers/Headers';
import Content from '../components/Profit/Content';


export default function Profit({ navigation }) {
    return (
        <View style={styles.Container}>
            <Headers navigation={navigation} title={'Profit'} />
            <Content />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
