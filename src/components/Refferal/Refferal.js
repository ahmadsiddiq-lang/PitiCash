/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { sizeFont, sizeWidth, sizeHeight } from '../../assets/responsive/Size';
import RBSheet from 'react-native-raw-bottom-sheet';

const data = [
    { title: 'Virtual Cash', date: '24-06-202', status: '1' },
    { title: 'Yogara', date: '24-06-202', status: '1' },
    { title: 'Jhon Dae', date: '24-06-202', status: '1' },
    { title: 'Clara Smith', date: '24-06-202', status: '0' },
    { title: 'Yogara 99', date: '24-06-202', status: '1' },
    { title: 'Yogara 99', date: '24-06-202', status: '0' },
];

export default function Refferal({ navigation }) {
    const refRBSheet = useRef();

    const [dataSheet, setDataSheet] = useState(null);

    const handleSheetActive = (index) => {
        setDataSheet(index);
        refRBSheet.current.open();
    };

    const RenderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => handleSheetActive(index)} key={index} style={styles.BoxList}>
                <View>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Join Date {item.date}</Text>
                </View>
                {
                    item.status === '1' ?
                        <View activeOpacity={0.6} style={styles.Btn}>
                            <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.3) }}>Active</Text>
                        </View> :
                        <View activeOpacity={0.6} style={styles.BtnNon}>
                            <Text style={{ color: color.fontWhite, fontSize: sizeFont(3.3) }}>Non-Active</Text>
                        </View>
                }
            </TouchableOpacity>
        );
    };

    const ComponetSheet = ({ dataForSheet }) => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerSheet}>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Detail Member</Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>User Id</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Jhon Doe</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Username</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Jhon Doe</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Name</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Jhon Doe</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Email</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>Jhon_Doe21@gmail.com</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>No. Handphone</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>081234566789</Text>
                        </View>
                        <View style={styles.ListItemSheet}>
                            <Text style={{ fontSize: sizeFont(3.3) }}>Join Date</Text>
                            <Text style={{ fontSize: sizeFont(3.3), fontFamily: Poppins.Medium }}>24-06-2020</Text>
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
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={sizeHeight(45)}
                animationType="fade"
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
    ContainerSheet: {
        paddingHorizontal: 20,
        // paddingBottom: 10,
        marginBottom: 10,
    },
    ListItemSheet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sizeWidth(2),
    },
});
