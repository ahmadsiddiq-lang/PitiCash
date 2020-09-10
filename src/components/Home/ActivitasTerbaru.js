/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
import Pie from 'react-native-pie';
import { LineChart } from 'react-native-chart-kit';
import { color } from '../../assets/colors/color';

export default function ActivitasTerbaru() {

    return (
        <View style={styles.Container}>
            <Text style={{ paddingVertical: 5, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Developer Fee</Text>
            <View style={styles.Content}>
                <View style={styles.BoxRiwayat}>
                    <View style={[styles.BoxItemRiwayat, { paddingRight: 20 }]}>
                        <View style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: 8 }}>
                            <View style={{ marginLeft: 10, marginTop: 10 }}>
                                <View style={styles.Circle} />
                                <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium, color: color.fontBlack }}>40.00</Text>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Total bonus</Text>
                            </View>
                            <View style={styles.BOxChart}>
                                <ChartRiwayat />
                            </View>
                        </View>
                    </View>
                    <View style={styles.BoxItemRiwayat}>
                        <View style={styles.BoxRightRiwayat}>
                            <View>
                                <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium, color: color.fontBlack }}>13.00</Text>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Pairing Bonus</Text>
                            </View>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(9), height: sizeWidth(9) }} source={require('../../assets/images/PairingBonus.png')} />
                        </View>
                        <View style={styles.BoxRightRiwayat}>
                            <View>
                                <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium, color: color.fontBlack }}>27.00</Text>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Refferal Bonus</Text>
                            </View>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(9), height: sizeWidth(9) }} source={require('../../assets/images/RefferalBonus.png')} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingVertical: 5, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5), marginTop: 15 }}>Profit Sharing</Text>
                    <View style={styles.BoxActivitas}>
                        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={styles.BoxListActivitas}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.Circle} />
                                        <View>
                                            <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium, color: color.fontBlack, marginLeft: 10 }}>13.70</Text>

                                        </View>
                                    </View>
                                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2, marginLeft: 20 }}>Jumlah PTC</Text>
                                </View>
                            </View>
                            <View style={styles.BoxListActivitas}>
                                <View >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.Circle} />
                                        <View>
                                            <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Medium, color: color.fontBlack, marginLeft: 10 }}>64.00</Text>

                                        </View>
                                    </View>
                                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2, marginLeft: 20 }}>Total Top Up</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <ChartActivitas />
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
}

const ChartRiwayat = () => {
    return (
        <LineChart
            data={{
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                        ],
                    },
                ],
            }}
            width={sizeWidth(55)} // from react-native
            height={sizeWidth(28)}
            // yAxisLabel={'Rp'}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withInnerLines={false}
            withOuterLines={false}
            // withShadow={true}
            chartConfig={{
                backgroundGradientToOpacity: color.background3,
                backgroundColor: color.mainColor,
                backgroundGradientFrom: color.background2,
                backgroundGradientTo: color.background1,
                // decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => color.mainColor,
                labelColor: (opacity = 1) => color.mainColor,
                style: {
                    borderRadius: 16,
                },
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 8,
                marginLeft: -50,
                marginBottom: -2,
                marginTop: -8,
            }}
        />
    );
};

const ChartActivitas = () => {
    return (
        <View style={styles.BoxChartActivitas}>
            <Pie
                radius={sizeWidth(30) / 2}
                innerRadius={sizeWidth(13)}
                sections={[
                    {
                        percentage: 70,
                        color: color.mainColor,
                    },
                ]}
                backgroundColor="#ddd"
            />
            <View
                style={styles.gauge}
            >
                <Text
                    style={styles.gaugeText}
                >
                    250.00
                </Text>
                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Limit Profit</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    Content: {
        // flexDirection: 'row',
    },
    BoxRiwayat: {
        // borderWidth: 1,
        flexDirection: 'row',
    },
    Circle: {
        // borderWidth: 1,
        width: sizeWidth(2.5),
        height: sizeWidth(2.5),
        borderRadius: sizeWidth(5),
        backgroundColor: color.mainColor,
    },
    BoxItemRiwayat: {
        // borderWidth: 1,
        // padding: 10,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    BoxRightRiwayat: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 15,
    },
    BOxChart: {
        // borderWidth: 1,
        overflow: 'hidden',
    },
    BoxActivitas: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingVertical: 15,
    },
    BoxListActivitas: {
        flexDirection: 'row',
        // paddingVertical: 10,
        // borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        marginRight: 10,
    },
    BoxChartActivitas: {
        width: sizeWidth(30),
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },
    gauge: {
        // borderWidth: 1,
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: color.fontBlack,
        fontFamily: Poppins.Medium,
        fontSize: sizeFont(5),
    },
});
