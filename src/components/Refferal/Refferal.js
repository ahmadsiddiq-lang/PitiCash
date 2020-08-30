import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';

const data = [
    { title: 'Virtual Cash', date: '24-06-202', status: '1' },
    { title: 'Yogara', date: '24-06-202', status: '1' },
    { title: 'Jhon Dae', date: '24-06-202', status: '1' },
    { title: 'Clara Smith', date: '24-06-202', status: '0' },
    { title: 'Yogara 99', date: '24-06-202', status: '1' },
    { title: 'Yogara 99', date: '24-06-202', status: '0' },
];

export default function Refferal() {

    const RenderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.BoxList}>
                <View>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Join Date {item.date}</Text>
                </View>
                {
                    item.status === '1' ?
                        <TouchableOpacity activeOpacity={0.6} style={styles.Btn}>
                            <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.3) }}>Active</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity activeOpacity={0.6} style={styles.BtnNon}>
                            <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.3) }}>Non-Active</Text>
                        </TouchableOpacity>
                }
            </View>
        );
    };

    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Content}>
                    {
                        data.map((item, index) => {
                            return (
                                <RenderItem key={index} item={item} index={index} />
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
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    Content: {
        paddingVertical: 10,
    },
    BoxList: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    Btn: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.mainColor,
        height: sizeWidth(7),
        width: sizeWidth(23),
    },
    BtnNon: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff124d',
        height: sizeWidth(7),
        width: sizeWidth(23),
    },
});
