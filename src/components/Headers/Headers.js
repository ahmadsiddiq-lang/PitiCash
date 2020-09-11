import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Poppins } from '../../assets/fonts/Poppins';


export default function Headers({ title, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.Content}>
                <View style={styles.BoxTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={styles.Btn}>
                        <Ionicons name="arrow-back-outline" size={25} color={color.borderWhite} />
                    </TouchableOpacity>
                    <Text style={styles.Title}>{title}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} activeOpacity={0.6} style={styles.Btn}>
                    <Ionicons name="search" size={sizeFont(6)} color={color.borderWhite} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        height: sizeWidth(15),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
    },
    Content: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    BoxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        color: color.fontWhite,
        fontSize: sizeFont(4),
        fontFamily: Poppins.Medium,
        marginLeft: 10,
    },
    Btn: {
        // borderWidth: 1,
        padding: 5,
    },
});
