import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default function Home() {
    return (
        <View>
            <Text style={styles.text}>HELLO MY HOME!!!</Text>
            <View style={styles.square}>

            </View>
            <Icon name="home" size={30} color="#4F8EF7" />
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
    },
    square: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 186,
        height: 182,
        left: 87,
        top: 73,
        backgroundColor: "hsla(169, 74%, 57%, 0.85)",
        // border: 'rgba(237, 42, 42, 0.76)',
        // boxShadow: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 30,
    },
});