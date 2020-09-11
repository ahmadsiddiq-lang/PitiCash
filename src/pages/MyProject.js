import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '../assets/colors/color';
import Header from '../components/Headers/HeaderMyProject';
// import HeaderSearch from '../components/Headers/HeaderSearch';
import Content from '../components/MyProject/Content';


export default function MyProject({ navigation }) {

    const [HeaderSet, setHeader] = useState(false);

    return (
        <View style={styles.Container}>
            {/* {
                HeaderSet ? */}
            {/* // <HeaderSearch setHeader={setHeader} /> : */}
            <Header navigation={navigation} setHeader={setHeader} />
            {/* } */}
            <View style={styles.Content}>
                <Content navigation={navigation} />
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
