/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { color } from '../assets/colors/color';
import { sizeFont, sizeWidth, SCREEN_WIDTH } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';
import Header from '../components/Headers/HeaderProject';
import Content from '../components/GlobalComponent/BgContent';
import Banner from '../components/Project/Banner';
import ProjectTerbaru from '../components/Project/ProjectTerbaru';
import Category from '../components/Project/Category';
// import RecomentProject from '../components/GlobalComponent/RecomentProject';

const dataProject = [
    { image: require('../assets/images/Project1.png'), title: 'Bisnis aman dengan Smarty Corner', target: '1000' },
    { image: require('../assets/images/Project4.png'), title: 'Project 1000 gerobak Qsah Kebab', target: '500' },
    { image: require('../assets/images/Project5.png'), title: 'Product Digital System Enterprise Resource Planning', target: '850' },
];


const ProjectScreen = ({ navigation }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            {/* <RecomentProject dataProject={dataProject} navigation={navigation} /> */}
            {
                dataProject.map((item, index) => {
                    return (
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('DetailProject')} key={index} style={styles.BoxList}>
                            <View style={styles.BoxImage}>
                                <Image style={{ resizeMode: 'stretch', width: '100%', height: '100%' }} source={item.image} />
                            </View>
                            <View style={styles.BoxContentRight}>
                                <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>{item.title}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginTop: 5 }}>Target Project</Text>
                                    <Text style={{ color: color.fontBody1, fontSize: sizeFont(3), marginTop: 5, fontFamily: Poppins.Medium }}>{item.target} PTC</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })
            }
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
    BoxList: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
    },
    BoxImage: {
        // width: sizeWidth(38),
        height: sizeWidth(20),
        overflow: 'hidden',
        borderRadius: 7,
        flex: 2,
        borderWidth: 0.5,
        borderColor: color.border1,
    },
    BoxContentRight: {
        marginLeft: 20,
        flex: 3,
    },
    BoxBg: {
        // borderWidth: 0.5,
        height: 5,
        borderRadius: 7,
        backgroundColor: color.background3,
    },
    BoxUp: {
        // width: '40%',
        height: '100%',
        backgroundColor: color.mainColor,
        borderRadius: 7,
    },
    BoxDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
