import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import Colors from '../assets/colors/colors';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TO DO: Implement login logic here
    // For now, just navigate to the MainScreen
    // navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        <Pressable style={styles.button}><Text style={styles.button_text}>Login</Text></Pressable>
    </SafeAreaView>
  );
};

const {main_color, text_color} = Colors;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: main_color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: text_color
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: text_color
  },
  button: {
    backgroundColor: text_color,
    padding: 10,
    borderRadius: 5

  },
  button_text: {
    color: main_color
  }
});

export default LoginScreen;