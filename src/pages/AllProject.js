/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Headers/Headers';
import { color } from '../assets/colors/color';
import { sizeWidth, sizeFont } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';
// import Rekomendasi from '../components/GlobalComponent/RecomentProject';

const data = [
    { title: 'Urutkan', image: require('../assets/images/MyProject/icon1.png') },
    { title: 'Filter', image: require('../assets/images/MyProject/icon2.png') },
    { title: 'Kategory', image: require('../assets/images/MyProject/icon3.png') },
];

const dataProject = [
    { image: require('../assets/images/Project1.png'), title: 'Bisnis aman dengan Smarty Corner', target: '1000' },
    { image: require('../assets/images/Project4.png'), title: 'Project 1000 gerobak Qsah Kebab', target: '500' },
    { image: require('../assets/images/Project5.png'), title: 'Product Digital System Enterprise Resource Planning', target: '850' },
];

export default function AllProject({ navigation }) {
    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={'Semua Project'} />
            <View style={styles.head}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={index} style={styles.BoxItem}>
                                <Image style={styles.Image} source={item.image} />
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <ScrollView shouldActivateOnStart={false}>
                <View style={styles.BoxProduct}>
                    {/* <Rekomendasi navigation={navigation} dataProject={dataProject} /> */}
                    <View>
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
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
    head: {
        // borderWidth: 1,
        flexDirection: 'row',
    },
    BoxItem: {
        borderWidth: 0.5,
        borderColor: color.border1,
        // height: sizeWidth(20),
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(10),
        height: sizeWidth(5),
    },
    BoxProduct: {
        paddingHorizontal: 20,
        flex: 1,
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
