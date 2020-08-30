/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from '../../assets/colors/color';
import { sizeFont, sizeWidth } from '../../assets/responsive/Size';

export default function Registrasi() {



    return (
        <View style={styles.Container}>
            <View style={styles.Content1}>
                <TouchableOpacity activeOpacity={0.6} style={styles.BoxUser}>
                    <FontAwesome name="user" size={sizeFont(10)} color={color.mainColor} />
                    <Text style={{ fontSize: sizeFont(3) }}>User 1</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 3 }}>
                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>12</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 3 }}>
                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>17</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.BoxContentLine}>
                <View style={styles.BoxLineLeft} />
                <View style={styles.BoxLineRight} />
            </View>
            <View style={styles.BoxContentLine}>
                <View style={styles.BoxLineLeft} />
                <View style={styles.BoxLineCenter} />
                <View style={styles.BoxLineRight} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                    [1, 2].map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={index} style={styles.BoxList}>
                                <View style={styles.BoxUser}>
                                    <FontAwesome name="user" size={sizeFont(10)} color={color.mainColor} />
                                    <Text style={{ fontSize: sizeFont(3) }}>User 1</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', padding: 3 }}>
                                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>12</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', padding: 3 }}>
                                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>17</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <View style={styles.BoxContentLine}>
                <View style={styles.BoxLineLeft} />
                <View style={styles.BoxLineCenter2} />
                <View style={styles.BoxLineRight} />
            </View>
            <View style={styles.BoxContentLine}>
                <View style={styles.BoxLineLeft} />
                <View style={styles.BoxLineCenterA} />
                <View style={styles.BoxLineCenterB} />
                <View style={styles.BoxLineCenterC} />
                <View style={styles.BoxLineRight} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                    [1, 2, 3, 4].map((item, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.6} style={styles.BoxList}>
                                <View style={styles.BoxUser}>
                                    <FontAwesome name="user" size={sizeFont(10)} color={color.mainColor} />
                                    <Text style={{ fontSize: sizeFont(3) }}>User 1</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', padding: 3 }}>
                                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>12</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', padding: 3 }}>
                                            <FontAwesome name="user" size={sizeFont(4)} color={color.fontBody2} />
                                            <Text style={{ marginLeft: 2, fontSize: sizeFont(3) }}>17</Text>
                                        </View>
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
        paddingHorizontal: 20,
    },
    Content1: {
        // borderWidth: 1,
        alignItems: 'center',
        // paddingVertical: 20,
        marginTop: 40,
    },
    BoxUser: {
        borderWidth: 0.5,
        borderColor: color.border1,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
    },
    BoxList: {
        flex: 2,
        alignItems: 'center',
    },
    BoxContentLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxLineLeft: {
        borderRightWidth: 1,
        borderColor: color.mainColor,
        height: sizeWidth(10),
        flex: 2,
    },
    BoxLineCenter: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 2,
        borderColor: color.mainColor,
        height: sizeWidth(10),
        flex: 4,
    },
    BoxLineRight: {
        borderLeftWidth: 1,
        borderColor: color.mainColor,
        height: sizeWidth(10),
        flex: 2,
    },
    BoxLineCenter2: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: color.mainColor,
        height: sizeWidth(10),
        flex: 4,
    },
    BoxLineCenterA: {
        flex: 4,
        borderColor: color.mainColor,
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },
    BoxLineCenterB: {
        flex: 4,
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: color.mainColor,
    },
    BoxLineCenterC: {
        flex: 4,
        borderColor: color.mainColor,
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
});
