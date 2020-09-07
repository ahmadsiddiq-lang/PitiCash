/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { color } from '../../assets/colors/color';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
import RecomentProject from '../GlobalComponent/RecomentProject';

const dataProject = [
    { image: require('../../assets/images/Project1.png'), target: '1000' },
    { image: require('../../assets/images/Project4.png'), target: '500' },
    { image: require('../../assets/images/Project5.png'), target: '850' },
];

export default function Rekomendasi({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: Poppins.Medium }}>Project Listing</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AllProject')} activeOpacity={0.6}>
                    <Text style={{ color: color.mainColor, fontSize: sizeFont(3) }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>
            {/* <RecomentProject dataProject={dataProject} navigation={navigation} /> */}
            <View>
                {
                    dataProject.map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('DetailProject')} key={index} style={styles.BoxList}>
                                <View style={styles.BoxImage}>
                                    <Image style={{ resizeMode: 'stretch', width: '100%', height: '100%' }} source={item.image} />
                                </View>
                                <View style={styles.BoxContentRight}>
                                    <Text style={{ fontSize: sizeFont(3), fontFamily: Poppins.Medium }}>Bersam membangun Smarty Mart</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text style={{ color: color.fontBody2, fontSize: sizeFont(2.5), marginTop: 5 }}>Target Project</Text>
                                        <Text style={{ color: color.fontBody1, fontSize: sizeFont(3), marginTop: 5, fontFamily: Poppins.Medium }}>{item.target} PCT</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
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
