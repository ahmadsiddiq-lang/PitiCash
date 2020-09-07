/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { color } from '../assets/colors/color';
import { sizeWidth, SCREEN_WIDTH, sizeFont } from '../assets/responsive/Size';
import { Poppins } from '../assets/fonts/Poppins';
import { StackActions } from '@react-navigation/native';

const data = [
    { image: require('../assets/images/splash/Gambar1.png'), title: 'Daftar Gratis', text: 'Pendaftaran Gratis. Tidak perlu mengeluarkan uang sedikitpun' },
    { image: require('../assets/images/splash/Gambar2.png'), title: 'Profit Besar', text: 'Anda dapat berinfestasi dengan resiko kecil dan profit besar' },
    { image: require('../assets/images/splash/Gambar3.png'), title: 'Investasi Aman', text: 'Tidak perlu takut berinvestasi, kami menjamin uang anda kembali' },
];

// export default function Splash({ navigation }) {
export default class Splash extends React.Component {

    scrollRef = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            indexOf: 0,
        };
    }

    //setIndex
    handleSetIndex = (e) => {
        const viewSize = e.nativeEvent.layoutMeasurement.width;
        const contentOffset = e.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({
            indexOf: selectedIndex,
        });
    };

    _handleNext = () => {
        this.setState(prev => ({ indexOf: prev.indexOf === data.length - 1 ? 0 : prev.indexOf + 1 }),
            () => {
                this.scrollRef.current.scrollTo({
                    animatde: true,
                    y: 0,
                    x: SCREEN_WIDTH * this.state.indexOf,
                });
            }
        );
    }

    // componentDidMount = () => {
    //     this.interval = setInterval(() => {
    //         this.setState(prev => ({ indexOf: prev.indexOf === data.length - 1 ? 0 : prev.indexOf + 1 }),
    //             () => {
    //                 this.scrollRef.current.scrollTo({
    //                     animatde: true,
    //                     y: 0,
    //                     x: SCREEN_WIDTH * this.state.indexOf,
    //                 });
    //             }
    //         );
    //     }, 3000);
    // }

    // componentWillUnmount() {
    //     // Clear the interval right before component unmount
    //     clearInterval(this.interval);
    // }

    render() {
        return (
            <View style={styles.Container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.handleSetIndex}
                    ref={this.scrollRef}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.BoxContent}>
                                    <View style={styles.BoxImage}>
                                        <Image style={styles.Image} source={item.image} />
                                    </View>
                                    <View style={styles.BoxText}>
                                        <Text style={{ fontSize: sizeFont(8), fontFamily: Poppins.Bold, color: color.mainColor }}>{item.title}</Text>
                                        <Text style={{ textAlign: 'center', color: color.fontBody2 }}>{item.text}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
                <View style={styles.BoxFooter}>
                    <View style={styles.BoxCircle}>
                        {
                            data.map((item, index) => {
                                return (
                                    <View key={index} style={[styles.Circle, this.state.indexOf === index && styles.CicleActive]} />
                                );
                            })
                        }
                    </View>
                    <View style={styles.BoxBtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(StackActions.replace('LoginSplash'))} activeOpacity={0.6} style={styles.BtnSkip}>
                            <Text style={{ color: color.fontBody2, fontFamily: Poppins.Medium }}>Skip</Text>
                        </TouchableOpacity>
                        {
                            this.state.indexOf === data.length - 1 ?
                                <TouchableOpacity onPress={() => this.props.navigation.dispatch(StackActions.replace('LoginSplash'))} activeOpacity={0.6} style={styles.Btn}>
                                    <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium }}>Start</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => this._handleNext()} activeOpacity={0.6} style={styles.Btn}>
                                    <Text style={{ color: color.fontWhite, fontFamily: Poppins.Medium }}>Next</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
        // paddingHorizontal: 25,
    },
    BoxContent: {
        // borderWidth: 1,
        flex: 2,
        width: SCREEN_WIDTH,
    },
    BoxImage: {
        // borderWidth: 1,
        marginTop: 20,
        height: '60%',
    },
    Image: {
        width: SCREEN_WIDTH,
        height: '100%',
        resizeMode: 'stretch',
    },
    BoxText: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 30,
    },
    BoxFooter: {
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    Circle: {
        width: 10,
        height: 10,
        backgroundColor: color.background4,
        borderRadius: 13 / 2,
        marginRight: 15,
    },
    CicleActive: {
        width: 18,
        backgroundColor: color.mainColor,
    },
    BoxCircle: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: sizeWidth(20),
    },
    Btn: {
        backgroundColor: color.mainColor,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 20,
        marginLeft: 15,
    },
    BtnSkip: {
        paddingHorizontal: 20,
        paddingVertical: 3,
    },
    BoxBtn: {
        flexDirection: 'row',
    },
});
