import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import Colors from '../assets/colors/colors';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailRepeat, setEmailRepeat] = useState('');

  const handleLogin = () => {
    // TO DO: Implement login logic here
    // For now, just navigate to the MainScreen
    // navigation.navigate('Main');
    if(email.trim() === ''){
        console.log('empty field');
        setEmail('');
        setEmailRepeat('');
        return;
    }

    if(email === emailRepeat){
        console.log("you are logedin");
    } else {
        console.log("incorect password");
    }

    setEmail('');
    setEmailRepeat('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Repeat Email"
            value={emailRepeat}
            onChangeText={(text) => setEmailRepeat(text)}
        />
            <Pressable style={styles.button} onPress={handleLogin}><Text style={styles.button_text}>Register</Text></Pressable>
        <View style={styles.login_container}>
            <Text style={styles.login}>Do you have an account?</Text>
            <Pressable><Text style={styles.login_link}>Login</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {main_color, text_color} = Colors;


const styles = StyleSheet.create({
    button: {
        backgroundColor: text_color,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,

    },
    button_text: {
        color: main_color
    },
    card: {
        width: 200,
        alignItems: "center"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: main_color
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: text_color,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: text_color,
        width: "100%",
        borderRadius: 10
    },
    login_container: {
        marginTop: 10
    },
    login:{
        color: text_color
    },
    login_link:{
        color: text_color,
        textDecorationLine: "underline",
        alignSelf: "center",
        width: "100%",
        textAlign: "center",
    }
});

export default RegisterScreen;