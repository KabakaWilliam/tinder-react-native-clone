import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { AuthProvider } from "./hooks/useAuth";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import StackNavigator from "./screens/StackNavigator";
import { RootStackParamList } from "./types/routing";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
