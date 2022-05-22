import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Rules from "./components/Rules";
import Start from "./components/Start";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {
                        fontSize: 20,
                    },
                }}
            >
                <Tab.Screen
                    name="Главная"
                    component={Home}
                    option={{
                        tabBarIcon: (
                            <Icon name="home" size={30} color="#4F8EF7" />
                        ),
                    }}
                />
                <Tab.Screen name="Начать" component={Start} />
                <Tab.Screen name="Правила" component={Rules} />
            </Tab.Navigator>
        </NavigationContainer>
        // <View style={styles.container}>
        //     <Text style={styles.text}>HELLO MY App!</Text>
        //     <View></View>
        // </View>
    );
}
