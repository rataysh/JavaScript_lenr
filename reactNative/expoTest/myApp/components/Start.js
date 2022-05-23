import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Start() {
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
            <View
                style={[
                    styles.btnGo,
                    {
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={[styles.textBtn]}>GO</Text>
            </View>
        </View>
    );
}

export const leftFirst = 30;
export const leftSecond = leftFirst + 123; //100 это сторона квадрата
export const leftThird = leftSecond + 123;
export const topFirst = 160;
export const topSecond = topFirst + 123;
export const topThird = topSecond + 123;
const btnMarginTop = topThird + topFirst;

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
        // left : 17 ,
        // right : "auto" ,
        // top : 151 ,
        // bottom : "auto" ,
        // transform : [ { translateX : 0 } , { translateY : 0 } , { rotate : "0deg" } , ],
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
    btnGo: {
        // position: "relative",
        width: 180,
        height: 50,
        alignSelf: "center",
        marginTop: btnMarginTop,
        borderRadius: 30,
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(229, 179, 179, 0.26)",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: "rgba(95, 116, 230, 1)",
    },
    textBtn: {
        fontFamily: "OpenSans-Bold",
        textDecorationLine: "none",
        fontSize: 25,
        color: "rgba(252, 252, 252, 0.86)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
    },
});

