import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import ChatPreview from '../components/ChatPreview';
import Colors from '../assets/colors/colors';

const {main_color, text_color} = Colors;

function MainScreen(props) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.settings}></View>
                <View style={styles.chat_container}>
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                </View>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        display: "flex",
        flex: 1,
        backgroundColor: main_color,
    },

    chat_container: {
        display: "flex",
        flex: 1,
        borderColor: "#2C3539",
        borderTopWidth: 2,
        top: 40,
    },
    settings: {
        width: 20,
        height: 20,
        backgroundColor: "red",
        position: "absolute",
        top: 50,
        left: 35
    }
})

export default MainScreen;