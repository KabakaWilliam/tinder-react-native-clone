import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/routing";
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import LoginScreen from "./LoginScreen";
import useAuth from "../hooks/useAuth";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { user, userPresent } = useAuth();
  return (
    <Stack.Navigator screenOptions={{}}>
      {userPresent ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
