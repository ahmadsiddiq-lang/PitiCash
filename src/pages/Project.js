import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderProject';
import Content from '../components/GlobalComponent/BgContent';
import Banner from '../components/Project/Banner';

export default function Project() {
    return (
        <View style={styles.Container}>
            <Header />
            <Content content={[
                <Banner />,
            ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
});
