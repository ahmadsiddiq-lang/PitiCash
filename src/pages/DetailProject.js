import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Banner from '../components/DetailProject/Banner';
import Info from '../components/DetailProject/Info';
import InfoProject from '../components/DetailProject/InfoProject';
import PemberiDana from '../components/DetailProject/PemberiDana';

export default function DetailProject({ navigation }) {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner navigation={navigation} />
                <Info navigation={navigation} />
                <InfoProject navigation={navigation} />
                <PemberiDana navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
