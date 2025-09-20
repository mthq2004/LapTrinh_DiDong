import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Button } from "react-native";
import { A } from "./screens/2_a";
import { NavigationContainer } from "@react-navigation/native";
import B from "./screens/2_b";
import TikiOk from "./screens/Tiki_Ok";
import C from "./screens/2_c";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="2_a" component={A}></Stack.Screen>
        <Stack.Screen name="2_b" component={B}></Stack.Screen>
        <Stack.Screen name="Tiki_Ok" component={TikiOk}></Stack.Screen>
        <Stack.Screen name="2_c" component={C}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15 }}>
      <Button title="Go to 2_a (Login)" onPress={() => navigation.navigate("2_a")} />
      <Button title="Go to 2_b (Review)" onPress={() => navigation.navigate("2_b")} />
      <Button title="Go to Tiki_Ok (Checkout)" onPress={() => navigation.navigate("Tiki_Ok")} />
      <Button title="Go to 2_c (Password Generator)" onPress={() => navigation.navigate("2_c")} />
    </View>
  );
}
