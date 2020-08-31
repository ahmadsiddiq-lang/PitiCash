import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PitiCash() {
    return (
        <View style={styles.Container}>
            <View>
                <View>
                    <View>
                        <Image />
                        <Text>Piti Cash</Text>
                    </View>
                    <Text>280.000</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        borderWidth: 1,
    },
});
