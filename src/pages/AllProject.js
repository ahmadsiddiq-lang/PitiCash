import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Headers/Headers';
import { color } from '../assets/colors/color';
import { sizeWidth } from '../assets/responsive/Size';
import Rekomendasi from '../components/GlobalComponent/RecomentProject';

const data = [
    { title: 'Urutkan', image: require('../assets/images/MyProject/icon1.png') },
    { title: 'Filter', image: require('../assets/images/MyProject/icon2.png') },
    { title: 'Kategory', image: require('../assets/images/MyProject/icon3.png') },
];

const dataProject = [
    { image: require('../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../assets/images/Project2.png'), persen: '30%', rp: '250.000.000', date: '01 Agustus 2020' },
    { image: require('../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../assets/images/Project3.png'), persen: '60%', rp: '250.000.000', date: '10 Agustus 2020' },
    { image: require('../assets/images/Project2.png'), persen: '30%', rp: '250.000.000', date: '01 Agustus 2020' },
    { image: require('../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../assets/images/Project3.png'), persen: '60%', rp: '250.000.000', date: '10 Agustus 2020' },
    { image: require('../assets/images/Project1.png'), persen: '40%', rp: '250.000.000', date: '30 Juli 2020' },
    { image: require('../assets/images/Project3.png'), persen: '60%', rp: '250.000.000', date: '10 Agustus 2020' },
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
                    <Rekomendasi navigation={navigation} dataProject={dataProject} />
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
});
