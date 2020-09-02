import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Headers/Headers';

export default function AllProject({ navigation }) {
    return (
        <View>
            <Header navigation={navigation} title={'Semua Project'} />
            <Text>AllProject</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
