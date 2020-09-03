import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { color } from '../../assets/colors/color';
import { sizeWidth } from '../../assets/responsive/Size';
export default function BgContent({ content }) {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {content && content.map((item, index) => {
                    return (
                        <SafeAreaView key={index}>
                            {item}
                        </SafeAreaView>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingTop: sizeWidth(7),
    },
});
