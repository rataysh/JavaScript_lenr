// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Start from "./components/Start";
import Icon from "react-native-vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Start"
                    component={Start}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Rules"
                    component={Rules}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

