// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
    leftFirst,
    leftSecond,
    leftThird,
    topFirst,
    topSecond,
    topThird,
    btnMarginTop,
} from "./Start";

export default function Rules() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.smalSquare, styles.smalSquare1, styles.rulesDescription]}>
                {/* <Text style={styles.textSquare}>V1{"\n"}WILL</Text> */}
            </View>
            <View style={[styles.smalSquare, styles.smalSquare2]}>
                {/* <Text style={[styles.textDescription, {fontSize: 17}]}>
                    <Text style={[{fontSize: 23, aling}]}>WILL +{"\n"}</Text>
                    -be able{"\n"}
                    -be allowed{"\n"}
                    -have
                    <Text style={{fontSize: 23}}>{"\n"} + to</Text>
                </Text>     */}
            </View>
            <View style={[styles.smalSquare, styles.smalSquare3]}></View>
            <View style={[styles.smalSquare, styles.smalSquare4]}></View>
            <View style={[styles.smalSquare, styles.smalSquare5]}></View>
            <View style={[styles.smalSquare, styles.smalSquare6]}></View>
            <View style={[styles.smalSquare, styles.smalSquare7]}></View>
            <View style={[styles.smalSquare, styles.smalSquare8]}></View>
            <View style={[styles.smalSquare, styles.smalSquare9]}></View>
            <View style={[styles.description, styles.textDescription]}>
                <Text style={styles.textDescription}>test 10*50 </Text>
            </View>
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
        width: 117,
        height: 117,
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
    description: {
        marginTop: btnMarginTop,
        justifyContent: "center",
        alignSelf: "center",
    },
    rulesDescription: {
        justifyContent: "center",
        alignItems: "center",
    },
    // textSquare: {
    //     // fontFamily: "OpenSans-Bold",
    //     // fontSize: 25,
    //     color: "rgba(252, 252, 252, 0.86)",
    //     // letterSpacing: 0.1,
    //     // textAlignVertical: "top",

    //     // fontFamily: "OpenSans-Bold",
    //     fontStyle: 'normal',
    //     fontWeight: '700',
    //     fontSize: 25,
    //     lineHeight: 25,
    //     display: 'flex',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     textTransform: 'uppercase',  
    // },
    textDescription: {
        fontFamily: "OpenSans-Bold",
        fontSize: 25,
        color: "rgba(252, 252, 252, 0.86)",
        letterSpacing: 0.1,
        textAlignVertical: "top",
    },
});
