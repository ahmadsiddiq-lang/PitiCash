import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Headers/HeaderHome';
import { color } from '../assets/colors/color';
import Content from '../components/GlobalComponent/BgContent';
import PitiCash from '../components/Home/PitiCash';
import ActivitasTerbaru from '../components/Home/ActivitasTerbaru';
import { SCREEN_WIDTH } from '../assets/responsive/Size';


export default function Home() {
    return (
        <View style={styles.Container}>
            <Header />
            <Content content={[
                <PitiCash />,
                <ActivitasTerbaru />,
                <View style={styles.Line} />,
            ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
    Line: {
        width: SCREEN_WIDTH,
        height: 5,
        backgroundColor: color.background3,
    },
});
