import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Headers/Headers';
import Head from '../components/Refferal/Head';
import Registrasi from '../components/Refferal/Registrasi';
import Refferal from '../components/Refferal/Refferal';
import Generation from '../components/Refferal/Generation';
import { color } from '../assets/colors/color';

const dataHead = [
    { title: 'Registrasi' },
    { title: 'Refferal' },
    { title: 'Generation' },
];

const dataListPage = [
    <Registrasi />,
    <Refferal />,
    <Generation />,
];

export default function Reaferals({ navigation }) {

    const [indeOf, setIndex] = useState(0);

    return (
        <View style={styles.Container}>
            <Header navigation={navigation} title={dataHead[indeOf].title} />
            <Head
                dataHead={dataHead}
                setIndex={setIndex}
                indeOf={indeOf}
            />
            {dataListPage[indeOf]}
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.background1,
    },
});
