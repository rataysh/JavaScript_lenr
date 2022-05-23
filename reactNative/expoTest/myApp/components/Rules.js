import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
    leftFirst,
    leftSecond,
    leftThird,
    topFirst,
    topSecond,
    topThird,
} from "./Start";

export default function Rules() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.smalSquare, styles.smalSquare1]}></View>
            <View style={[styles.smalSquare, styles.smalSquare2]}></View>
            <View style={[styles.smalSquare, styles.smalSquare3]}></View>
            <View style={[styles.smalSquare, styles.smalSquare4]}></View>
            <View style={[styles.smalSquare, styles.smalSquare5]}></View>
            <View style={[styles.smalSquare, styles.smalSquare6]}></View>
            <View style={[styles.smalSquare, styles.smalSquare7]}></View>
            <View style={[styles.smalSquare, styles.smalSquare8]}></View>
            <View style={[styles.smalSquare, styles.smalSquare9]}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(29, 33, 46, 0.69)",
        padding: "4%",
        // flexDirection: "row",
        // justifyContent: "center",
        // flexWrap: "wrap",
        // alignContent: "center",
    },
    smalSquare: {
        position: "absolute",
        width: 110,
        height: 110,
        borderRadius: 20,
        backgroundColor: "hsla(169, 74%, 57%, 0.85)",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(236, 42, 42, 0.76)",
    },
    smalSquare1: {
        left: leftFirst,
        right: "auto",
        top: topFirst,
        bottom: "auto",
    },
    smalSquare2: {
        left: leftSecond,
        right: "auto",
        top: topFirst,
        bottom: "auto",
    },
    smalSquare3: {
        left: leftThird,
        right: "auto",
        top: topFirst,
        bottom: "auto",
    },
    smalSquare4: {
        left: leftFirst,
        right: "auto",
        top: topSecond,
        bottom: "auto",
    },
    smalSquare5: {
        left: leftSecond,
        right: "auto",
        top: topSecond,
        bottom: "auto",
    },
    smalSquare6: {
        left: leftThird,
        right: "auto",
        top: topSecond,
        bottom: "auto",
    },
    smalSquare7: {
        left: leftFirst,
        right: "auto",
        top: topThird,
        bottom: "auto",
    },
    smalSquare8: {
        left: leftSecond,
        right: "auto",
        top: topThird,
        bottom: "auto",
    },
    smalSquare9: {
        left: leftThird,
        right: "auto",
        top: topThird,
        bottom: "auto",
    },
    header: {
        marginTop: 80,
        justifyContent: "center",
        alignSelf: "center",
    },
});
