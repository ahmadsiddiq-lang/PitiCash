/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { sizeWidth, SCREEN_WIDTH, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { color } from '../../assets/colors/color';

const data = [
    { image: require('../../assets/images/icon1.png'), color: '#a99cff', title: 'Referral Bonus', qty: '18.00' },
    { image: require('../../assets/images/icon2.png'), color: '#ff9494', title: 'Pairing Bonus', qty: '13.00' },
    { image: require('../../assets/images/icon3.png'), color: '#ff94bd', title: 'Limit Bonus', qty: '346.95' },
    { image: require('../../assets/images/icon4.png'), color: '#94c6ff', title: 'Total Bonus', qty: '42.65' },
    { image: require('../../assets/images/icon5.png'), color: '#94ff96', title: 'Bonus Bayar', qty: '52.00' },
    { image: require('../../assets/images/icon6.png'), color: '#ffda94', title: 'Profit', qty: '11.65' },
];

export default function ActivitasTerbaru() {

    const [LimitBonus, setLimit] = useState(250);
    const [dataLimitChart, setDataChat] = useState(0);

    const handleLimit = (dataLimitInput) => {
        const total = dataLimitInput / LimitBonus;
        setDataChat(total);
    };

    useEffect(() => {
        handleLimit(60);
    }, []);

    return (
        <View style={styles.Container}>
            <Text style={{ paddingVertical: 10, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Riwayat Bonus</Text>
            <View style={styles.Content}>
                <View style={styles.BoxRiwayat}>
                    <View style={styles.BoxItemRiwayat}>
                        <View style={styles.Circle} />
                        <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Bold, color: color.fontBody2 }}>40.00</Text>
                        <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Total bonus</Text>
                        <View style={styles.BOxChart}>
                            <ChartRiwayat />
                        </View>
                    </View>
                    <View style={styles.BoxItemRiwayat}>
                        <View style={styles.BoxRightRiwayat}>
                            <View>
                                <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Bold, color: color.fontBody2 }}>13.00</Text>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Pairing Bonus</Text>
                            </View>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(9), height: sizeWidth(9) }} source={require('../../assets/images/PairingBonus.png')} />
                        </View>
                        <View style={styles.BoxRightRiwayat}>
                            <View>
                                <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Bold, color: color.fontBody2 }}>27.00</Text>
                                <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Refferal Bonus</Text>
                            </View>
                            <Image style={{ resizeMode: 'contain', width: sizeWidth(9), height: sizeWidth(9) }} source={require('../../assets/images/RefferalBonus.png')} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingVertical: 10, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>Activitas Bonus</Text>
                    <View style={styles.BoxActivitas}>
                        <View style={{ flex: 2 }}>
                            <View style={styles.BoxListActivitas}>
                                <View style={{ marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.Circle} />
                                        <View>
                                            <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Bold, color: color.fontBody2, marginLeft: 10 }}>13.00</Text>

                                        </View>
                                    </View>
                                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2, marginLeft: 20 }}>Pairing Bonus</Text>
                                </View>
                            </View>
                            <View style={styles.BoxListActivitas}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.Circle} />
                                        <View>
                                            <Text style={{ fontSize: sizeFont(4.5), fontFamily: Poppins.Bold, color: color.fontBody2, marginLeft: 10 }}>13.00</Text>

                                        </View>
                                    </View>
                                    <Text style={{ fontSize: sizeFont(3), color: color.fontBody2, marginLeft: 20 }}>Pairing Bonus</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flex: 2 }}>
                            <ChartActivitas dataLimitChart={dataLimitChart} />
                            <Text style={{ fontSize: sizeFont(3), color: color.fontBody2 }}>Limit Bonu <Text style={{ color: color.fontBlack, fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>{LimitBonus}</Text></Text>
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
            width={sizeWidth(45)} // from react-native
            height={sizeWidth(18)}
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
            }}
        />
    );
};

const ChartActivitas = ({ dataLimitChart }) => {
    return (
        <ProgressChart
            data={
                {
                    // labels: ['Caca'],
                    data: [dataLimitChart],
                }
            }
            width={sizeWidth(40)} // from react-native
            height={sizeWidth(19)}
            chartConfig={
                {
                    backgroundGradientFrom: color.background1,
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: color.background1,
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(0, 220, 255, ${opacity})`,
                    strokeWidth: 1, // optional, default 3
                }
            }
            backgroundColor={color.mainColor}
            // paddingLeft="15"
            absolute
            style={{
                marginVertical: 8,
                borderRadius: 16,
                marginLeft: -20,
            }}
        />
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
        // backgroundColor: color.background3,
    },
    BOxChart: {
        // borderWidth: 1,
        overflow: 'hidden',
    },
    BoxActivitas: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoxListActivitas: {
        flexDirection: 'row',
        // paddingVertical: 10,
        // borderWidth: 1,
    },
});
