/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../../assets/colors/color';
import { sizeWidth, sizeFont } from '../../assets/responsive/Size';
import { Poppins } from '../../assets/fonts/Poppins';
// import { Picker } from '@react-native-community/picker';

export default function PitiCash({ navigation }) {


    return (
        <LinearGradient colors={[color.background1, color.background1, color.background6]} style={styles.Container}>
            <View style={styles.ContentTopUp}>
                <View style={styles.BoxPiti}>
                    <View style={styles.BoxDompet}>
                        <Image style={styles.ImageDompet} source={require('../../assets/images/Dompet.png')} />
                        <Text style={{ fontSize: sizeFont(3.3) }}>Piti Cash</Text>
                    </View>
                    <Text style={{ fontFamily: Poppins.Medium, fontSize: sizeFont(3.5) }}>280.000</Text>
                </View>
                <View style={styles.BOxBottom}>
                    <Text style={{ fontFamily: Poppins.Medium }}>Top Up Piti Cash</Text>
                    <Text style={{ fontSize: sizeFont(2.5), color: color.fontBody2 }}>Jumlah Top Up</Text>
                    <View style={styles.BOxPicker}>
                        {/* <Picker
                            selectedValue={valuePicker}
                            style={{ height: sizeWidth(8), width: '100%' }}
                            onValueChange={(itemValue, itemIndex) =>
                                setPicker(itemValue)
                            }>
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="40" value="40" />
                            <Picker.Item label="50" value="50" />
                            <Picker.Item label="100" value="100" />
                        </Picker> */}
                        <TextInput placeholder="Jumlah" maxLength={30} keyboardType="numeric" style={{ padding: 0 }} />
                    </View>
                </View>
                <View style={styles.BoxBtn}>
                    <Button onPress={() => navigation.navigate('TopUpSaldo')} color={color.mainColor} title="Top Up" />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Container: {
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    ContentTopUp: {
        // borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        backgroundColor: color.background1,
        borderWidth: 0.5,
        borderColor: color.border1,
        marginTop: 15,
    },
    BoxPiti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: color.mainColor,
        paddingBottom: 10,
    },
    BoxDompet: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    ImageDompet: {
        resizeMode: 'contain',
        width: sizeWidth(5),
        height: sizeWidth(5),
        marginRight: 10,
        marginBottom: 5,
    },
    BOxBottom: {
        marginTop: 10,
    },
    BOxPicker: {
        // borderWidth: 1,
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: color.mainColor,
    },
    BoxBtn: {
        marginTop: 10,
    },
});
