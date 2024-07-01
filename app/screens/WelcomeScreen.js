import React from 'react';
import { View, Text, SafeAreaView, SafeAreaViewComponent } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from '../assets/colors/colors'
function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>hello from DOT</Text>
        </SafeAreaView>
    );
}

const {main_color, text_color} = Colors;

const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1,
        backgroundColor: main_color,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        color: text_color
    }
})

export default WelcomeScreen;