import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';

export default function HeadTopUp({ navigation, title }) {
    return (
        <View style={styles.Container}>
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
    Container: {
        height: sizeWidth(15),
        // borderWidth: 1,
        justifyContent: 'center',
    },
    Content: {

    },
});
