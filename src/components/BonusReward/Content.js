import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';
import { Poppins } from '../../assets/fonts/Poppins';
import { dataBonusReward } from '../../DataDummy';

export default function Content() {
    return (
        <View style={styles.Content}>
            <View style={styles.Head}>
                <View style={styles.BoxContentHead}>
                    <View style={styles.BoxItem}>
                        <Image style={styles.Image} source={require('../../assets/images/IconPoin.png')} />
                        <View style={styles.BoxTextItem}>
                            <Text style={{ color: color.fontBody2 }}>Point Kiri</Text>
                            <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>53.700.00</Text>
                        </View>
                    </View>
                    <View style={styles.Line} />
                    <View style={styles.BoxItem}>
                        <Image style={styles.Image} source={require('../../assets/images/IconPoin.png')} />
                        <View style={styles.BoxTextItem}>
                            <Text style={{ color: color.fontBody2 }}>Point Kanan</Text>
                            <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>23.800.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.BoxContent}>
                    {
                        dataBonusReward.map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxList}>
                                    <View style={styles.BoxImage}>
                                        <Image style={styles.ImageProduct} source={item.image} />
                                    </View>
                                    <View style={styles.BoxTextList}>
                                        <View style={styles.BoxTitle}>
                                            <View style={styles.BOxTitleWidth}>
                                                <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{item.title}</Text>
                                            </View>
                                            <View style={styles.BoxBtn}>
                                                <TouchableOpacity activeOpacity={0.6} style={styles.Btn} >
                                                    <Text style={{ color: color.mainColor, fontFamily: Poppins.Medium }}>Berhasil</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.BoxPoinFooter}>
                                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kiri
                                                <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                            </Text>
                                            <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kanan
                                                <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                    <View style={styles.BoxList}>
                        <View style={styles.BoxImage}>
                            <Image style={styles.ImageProduct} source={require('../../assets/images/Product/hp.png')} />
                        </View>
                        <View style={styles.BoxTextList}>
                            <View style={styles.BoxTitle}>
                                <View style={styles.BOxTitleWidth}>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Hp Android + 500.00 Piti Cash</Text>
                                </View>
                                <View style={styles.BoxBtn}>
                                    <TouchableOpacity activeOpacity={0.6} style={styles.BtnPending} >
                                        <Text style={{ color: color.fontPink, fontFamily: Poppins.Medium }}>Pending</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.BoxPoinFooter}>
                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kiri
                                    <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                </Text>
                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kanan
                                    <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BoxList}>
                        <View style={styles.BoxImage}>
                            <Image style={styles.ImageProduct} source={require('../../assets/images/Product/hp.png')} />
                        </View>
                        <View style={styles.BoxTextList}>
                            <View style={styles.BoxTitle}>
                                <View style={styles.BOxTitleWidth}>
                                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Hp Android + 500.00 Piti Cash</Text>
                                </View>
                                <View style={styles.BoxBtn}>
                                    <TouchableOpacity activeOpacity={0.6} style={styles.BtnPending} >
                                        <Text style={{ color: color.fontPink, fontFamily: Poppins.Medium }}>Pending</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.BoxPoinFooter}>
                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kiri
                                    <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                </Text>
                                <Text style={{ color: color.fontBody2, fontSize: sizeFont(3) }}>Point Kanan
                                    <Text style={{ color: color.fontBlack }}> 15.000.00</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    Content: {
        // borderWidth: 1,
        flex: 1,
    },
    Head: {
        // borderWidth: 1,
        padding: 20,
        paddingHorizontal: 20,
    },
    BoxContentHead: {
        borderWidth: 0.8,
        borderColor: color.mainColor,
        borderRadius: 7,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    BoxItem: {
        flex: 2,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    BoxTextItem: {
        // borderWidth: 1,
        maxWidth: sizeWidth(31.5),
    },
    Line: {
        height: '100%',
        borderWidth: 0.5,
        borderColor: color.mainColor,
    },
    Image: {
        resizeMode: 'contain',
        width: sizeWidth(6),
        marginRight: 10,
    },
    BoxContent: {
        flex: 1,
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    BoxList: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border1,
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 20,
    },
    BoxImage: {
        // borderWidth: 1,
        overflow: 'hidden',
        width: sizeWidth(17),
        height: sizeWidth(17),
        marginRight: 10,
    },
    ImageProduct: {
        resizeMode: 'contain',
        width: sizeWidth(17),
        height: sizeWidth(17),
    },
    BoxTextList: {
        flexDirection: 'column',
        // borderWidth: 1,
        flex: 2,
        justifyContent: 'space-between',
    },
    BoxTitle: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BOxTitleWidth: {
        // borderWidth: 1,
        flex: 2.5,
    },
    BoxPoinFooter: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxBtn: {
        // borderWidth: 1,
        paddingHorizontal: 5,
        flex: 1,
    },
    Btn: {
        // borderWidth: 1,
        borderRadius: 7,
        alignItems: 'center',
        // borderColor: color.mainColor,
        padding: 2,
        backgroundColor: color.background2,
    },
    BtnPending: {
        // borderWidth: 1,
        borderRadius: 7,
        alignItems: 'center',
        // borderColor: color.border2,
        backgroundColor: color.background5,
        padding: 2,
    },
});
