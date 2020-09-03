import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sizeFont } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';


export default function Head({ dataHead = [], setIndex, indeOf }) {

    const styleBorder = {
        borderBottomWidth: 1.5,
        borderBottomColor: color.mainColor,
    };

    return (
        <View style={styles.Container}>
            {
                dataHead.map((item, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            key={index}
                            style={[styles.BoxList,
                            indeOf === index && styleBorder,
                            ]}
                            onPress={() => setIndex(index)}
                        >
                            <Text style={[styles.TextTitle,
                            indeOf === index && { color: color.mainColor },
                            ]}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View >
    );
}

const styles = StyleSheet.create({
    Container: {
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        flexDirection: 'row',
    },
    BoxList: {
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    TextTitle: {
        fontSize: sizeFont(3.5),
        color: color.fontBody2,
        fontFamily: Poppins.Medium,
    },
});
