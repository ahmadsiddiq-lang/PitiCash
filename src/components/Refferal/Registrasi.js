/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from '../../assets/colors/color';
import { sizeFont, sizeWidth, sizeHeight } from '../../assets/responsive/Size';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Poppins } from '../../assets/fonts/Poppins';


export default function Registrasi() {

    const refRBSheet = useRef();

    const [dataSheet, setDataSheet] = useState(null);

    const handleSheetActive = (index) => {
        setDataSheet(index);
        refRBSheet.current.open();
    };

    const ComponetSheet = ({ dataForSheet }) => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerSheet}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Detail Member</Text>
                    <View style={styles.BoxHead}>
                        <View style={styles.BoxAvatar}>
                            <FontAwesome name="user" size={sizeFont(18)} color={color.mainColor} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Id</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Jhon Doe</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Sponsor</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Clara Smith</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Left Omzet</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>90.321</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Right Omzet</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>172.395</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Status</Text>
                            <View style={{
                                overflow: 'hidden',
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: color.mainColor,
                                height: sizeWidth(7),
                                width: sizeWidth(23),
                            }}>
                                <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium, color: color.fontWhite }}>Active</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={styles.Container}>
            <View style={styles.Content1}>
                <TouchableOpacity onPress={() => handleSheetActive()} activeOpacity={0.6} style={styles.BoxUser}>
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
                            <TouchableOpacity onPress={() => handleSheetActive(index)} activeOpacity={0.6} key={index} style={styles.BoxList}>
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
                            <TouchableOpacity onPress={() => handleSheetActive(index)} key={index} activeOpacity={0.6} style={styles.BoxList}>
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
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={sizeHeight(48)}
                animationType="slide"
                customStyles={{
                    wrapper: {
                        // backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: color.border1,
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                <ComponetSheet dataForSheet={dataSheet} />
            </RBSheet>
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
        // borderBottomWidth: 1,
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
        // borderTopWidth: 2,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderColor: color.mainColor,
    },
    BoxLineCenterC: {
        flex: 4,
        borderColor: color.mainColor,
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    ContainerSheet: {
        paddingHorizontal: 20,
    },
    BoxHead: {
        // borderWidth: 1,
        alignItems: 'center',
    },
    BoxAvatar: {
        borderWidth: 1,
        borderColor: color.border1,
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 10,
        overflow: 'hidden',
        // width: sizeWidth(20),
        // height: sizeWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    ListItemSheet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sizeWidth(2),
    },
});
