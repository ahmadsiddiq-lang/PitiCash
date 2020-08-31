import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';



export default function HeaderMetode({ navigation, title }) {
    return (
        <View style={styles.container}>
            <View style={styles.Content}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6} style={styles.Btn}>
                    <Ionicons name="arrow-back-outline" size={25} color={color.borderWhite} />
                </TouchableOpacity>
                <Text style={styles.Title}>{title}</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    Title: {
        color: color.fontWhite,
        fontSize: sizeFont(4),
        fontFamily: Poppins.Medium,
        marginLeft: 10,
    },
});
