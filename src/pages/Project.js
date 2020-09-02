/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderProject';
import Content from '../components/GlobalComponent/BgContent';
import Banner from '../components/Project/Banner';
import ProjectTerbaru from '../components/Project/ProjectTerbaru';
import Category from '../components/Project/Category';
import RecomentProject from '../components/GlobalComponent/RecomentProject';
import { SCREEN_WIDTH } from '../assets/responsive/Size';

const dataProject = [
    { image: require('../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../assets/images/Project2.png'), persen: '30%', rp: '250.000.000', date: '01 Agustus 2020' },
    { image: require('../assets/images/Project3.png'), persen: '60%', rp: '250.000.000', date: '10 Agustus 2020' },
];


const ProjectScreen = ({ navigation }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <RecomentProject dataProject={dataProject} navigation={navigation} />
        </View>
    );
};

export default function Project({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} />
            <Content content={[
                <Banner />,
                <ProjectTerbaru />,
                <View style={styles.Line} />,
                <Category />,
                <ProjectScreen navigation={navigation} />,
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
