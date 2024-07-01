import { View, Text } from "react-native"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import LoginScreen from "./app/screens/LoginScreen"
import RegisterScreen from "./app/screens/RegisterScreen"
import MainScreen from "./app/screens/MainScreen"
import ChatScreen from "./app/screens/ChatScreen"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(){
    return (

     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="welcome" component />
            
          
        </Stack.Navigator>
     </NavigationContainer>
  )
}