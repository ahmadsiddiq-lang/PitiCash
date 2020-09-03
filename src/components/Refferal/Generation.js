import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont } from '../../assets/responsive/Size';

const data = [
    { title: 'Virtual Cash', date: '24-06-202', generasi: '1', point: '5000.00' },
    { title: 'Yogara', date: '24-06-202', generasi: '4', point: '80.00' },
    { title: 'Jhon Dae', date: '24-06-202', generasi: '5', point: '6000.00' },
    { title: 'Clara Smith', date: '24-06-202', generasi: '2', point: '400.00' },
    { title: 'Yogara 99', date: '24-06-202', generasi: '6', point: '760.00' },
    { title: 'Yogara 99', date: '24-06-202', generasi: '3', point: '10000.00' },
    { title: 'Yogara 99', date: '24-06-202', generasi: '3', point: '10000.00' },
    { title: 'Yogara 99', date: '24-06-202', generasi: '3', point: '10000.00' },
    { title: 'Yogara 99', date: '24-06-202', generasi: '3', point: '10000.00' },
];

export default function Generation() {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Content}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxLIst}>
                                    <View>
                                        <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                                        <Text style={{ fontSize: sizeFont(2.5), color: color.fontBody2 }}>Generation {item.generasi}</Text>
                                        <Text style={{ fontSize: sizeFont(2.5), color: color.fontBody2 }}>Join date {item.date}</Text>
                                    </View>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5), color: color.mainColor }}>{item.point}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Content: {
        paddingVertical: 10,
    },
    BoxLIst: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginTop: 10,
    },
});
