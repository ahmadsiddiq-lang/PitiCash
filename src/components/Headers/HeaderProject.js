/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';

export default function HeaderProject({ navigation }) {
    return (
        <View style={styles.Container}>
            <View style={styles.Content}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.BoxInput}>
                    <View style={{ width: '90%', paddingLeft: 20 }}>
                        <Text style={{ color: color.fontWhite }}>Cari investasi apa</Text>
                    </View>
                    <View style={styles.BoxSearch} activeOpacity={0.6}>
                        <Ionicons name="search" size={20} color={color.background1} />
                    </View>
                </TouchableOpacity>
                <View style={styles.BoxBell}>
                    <View style={styles.Circle} />
                    <FontAwesome onPress={() => navigation.navigate('Notifikasi')} name="bell" color={color.background1} size={25} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        // borderWidth: 1,
        height: sizeWidth(20),
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    Content: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    BoxInput: {
        // borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
        backgroundColor: color.SearchColor,
        width: '90%',
        overflow: 'hidden',
        paddingVertical: 5,
    },
    Input: {
        // borderWidth: 1,
        width: '90%',
        padding: 1,
        paddingLeft: 15,
        color: color.fontWhite,
        fontSize: sizeFont(3.5),
        letterSpacing: 0.5,
    },
    BoxSearch: {
        // borderWidth: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.SearchColor,
    },
    BoxBell: {
        marginTop: 1.5,
    },
    Circle: {
        width: 13,
        height: 13,
        borderRadius: 13 / 2,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: color.mainColor,
        position: 'absolute',
        zIndex: 2,
        right: 0,
        // top: 5,
    },
});
