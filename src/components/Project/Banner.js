/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SCREEN_WIDTH, sizeWidth } from '../../assets/responsive/Size';
import { color } from '../../assets/colors/color';

const data = [
    { image: require('../../assets/images/Banner1.png') },
    { image: require('../../assets/images/Banner2.png') },
    { image: require('../../assets/images/Banner1.png') },
    { image: require('../../assets/images/Banner2.png') },
];

export default function Banner() {
    const scrollRef = React.createRef();
    const [indexOf, setIndex] = useState(0);

    const handleSetIndex = (e) => {
        const contentOffset = e.nativeEvent.contentOffset.x;
        const selectedIndex = Math.ceil(contentOffset / SCREEN_WIDTH);
        // console.log(selectedIndex);
        setIndex(selectedIndex);
    };

    return (
        <View style={styles.Container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleSetIndex}
                ref={scrollRef}
            >
                {
                    data.map((item, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.BoxImage}>
                                    <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={item.image} />
                                </View>
                            </View>
                        );
                    })
                }

            </ScrollView>
            <View style={styles.BoxCircle}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.Circle, indexOf === index ? styles.circleActive : { width: 10, backgroundColor: color.background4 }]} />
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // borderWidth: 1,
        paddingHorizontal: 20,
    },
    BoxImage: {
        overflow: 'hidden',
        // borderWidth: 1,
        // height: 100,
        width: SCREEN_WIDTH - 40,
        height: sizeWidth(33),
        borderRadius: 10,
    },
    BoxCircle: {
        marginTop: 10,
        flexDirection: 'row',
    },
    Circle: {
        height: 8,
        borderRadius: 10 / 2,
        marginRight: 5,
    },
    circleActive: {
        width: 18,
        backgroundColor: color.mainColor,
    },
});
