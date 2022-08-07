import { useNavigation } from "@react-navigation/native";

import { View, Text, Button } from "react-native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full  ">
      <Text className="text-lg ">hello hello</Text>
      <Button title="go to chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default HomeScreen;
