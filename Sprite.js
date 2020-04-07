import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sprite() {
    const styles = StyleSheet.create({
        container: {
        borderRadius: 10,
        borderWidth: 5,
        backgroundColor: 'lightgrey'
    },
        text: {
            color: 'red',
            fontSize: 20,
            margin: 5,
            textAlign: 'center'
        }});
    return     <View style={styles.container}>
                    <Text style={styles.text}>Box</Text>
                </View>
}
