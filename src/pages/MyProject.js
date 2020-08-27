import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderMyProject';
import Content from '../components/MyProject/Content';


export default function MyProject() {
    return (
        <View style={styles.Container}>
            <Header />
            <View style={styles.Content}>
                <Content />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.mainColor,
    },
    Content: {
        backgroundColor: color.background1,
        flex: 1,
    },
});
