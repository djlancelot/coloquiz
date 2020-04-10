import React from 'react';
import { StyleSheet, Text, View, PanResponder, Animated} from 'react-native';

export default function Sprite() {
    const pan = React.useRef(new Animated.ValueXY()).current;

    const panResponder = React.useRef(
        PanResponder.create({
            
        })
    ).current;

    const styles = StyleSheet.create({
        container: {
        borderRadius: 10,
        borderWidth: 5,
        backgroundColor: 'lightgrey',
        width: 100
    },
        text: {
            color: 'red',
            fontSize: 20,
            margin: 5,
            textAlign: 'center'
        }});
    return     <Animated.View>
                    <View style={styles.container}>
                        <Text style={styles.text}>Box</Text>
                    </View>
                </Animated.View>
}
