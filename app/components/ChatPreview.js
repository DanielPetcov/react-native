import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';
const {main_color, text_color} = colors;

function ChatPreview(props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image source={require("../assets/me.jpg")} style={styles.user_icon}/>
                <View style={styles.left_text}>
                    <Text style={styles.user_name}>Dan</Text>
                    <Text style={styles.from_chat}>enter the meet</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.date}>9.32pm</Text>
                <View style={styles.notification}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#2C3539",
        borderBottomWidth: 2,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    left_text: {
        justifyContent: "space-between",
        height: "100%"
        
    },
    user_icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 5
    },
    user_name: {
        fontWeight: "400",
        fontSize: 20,
        color: text_color,
    },
    from_chat: {
        fontWeight: "800",
        color: text_color,
    },
    right: {
        justifyContent: "space-between"
    },
    date: {
        color: text_color,
    },
    notification: {
        width: 15,
        height: 15,
        backgroundColor: "blue",
        alignSelf: "center",
        borderRadius: 50
    }
})

export default ChatPreview;