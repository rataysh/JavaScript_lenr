import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Home() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.square]}>
                <Text style={styles.text}>HELLO MY HOME!!!</Text>
                <Icon name="home" size={30} color="#4F8EF7" />
            </View>
            <View
                style={[
                    styles.btnRules,
                    {
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={styles.text}>RULES</Text>
            </View>
            <View
                style={[
                    styles.btnStart,
                    {
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={styles.text}>START</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(29, 33, 46, 0.69)",
        padding: '20%',
        // position: "relative",
        // width: Dimensions.get("window").width,
        // height: 800,
        // borderRadius: 0,
        // overflow: "hidden",
        // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        // padding: 'spacing',
        // flexDirection: "column",
        // flexWrap:'wrap',
        // aliginContent: 'stretch',
        // alignItems: "center",
        // justifyContent: "center",
        // left: 0,
        // top: 0,
    },
    square: {
        position: "relative",
        // flex: 1,
        width: 180,
        height: 180,
        borderRadius: 30,
        alignSelf: "center",
        // flexDirection: "row",
        // marginTop: "15%",
        opacity: 1,
        borderWidth: 1,
        borderColor: "rgba(236, 42, 42, 0.76)",
        // right: "auto",
        // bottom: "auto",
        // transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        //расположение контента
        backgroundColor: "hsla(169, 74%, 57%, 0.85)",
        justifyContent: "center",
        alignItems: "center",
    },
    btnRules: {
        position: "relative",
        width: 180,
        height: 50,
        alignSelf: "center",
        marginTop: "70%",
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
    btnStart: {
        position: "relative",
        width: 180,
        height: 50,
        alignSelf: "center",
        marginTop: "10%",
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
    text: {
        fontFamily: "OpenSans-ExtraBold",
        textDecorationLine: "none",
        fontSize: 25,
        color: "rgba(252, 252, 252, 0.86)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1,
    },
});

// import React from "react";
// import {
//     View,
//     Text,
//     Image,
//     ScrollView,
//     StyleSheet,
//     Dimensions,
// } from "react-native";
// import { Svg, Path } from "react-native-svg";

// import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/dev";

// export default function App() {
//     let [fontsLoaded] = useFonts({
//         "Open Sans": OpenSans_400Regular,
//     });

//     return (
//         <ScrollView
//             bounces={false}
//             showsVerticalScrollIndicator={false}
//             style={{ height: Dimensions.get("window").height }}
//         >
//             <View style={stylesheet._Frame_1}>
//                 <View style={stylesheet._Rectangle_17}></View>
//                 <View style={stylesheet._Rectangle_26}></View>
//                 <View
//                     style={[
//                         stylesheet._START,
//                         {
//                             display: "flex",
//                             flexDirection: "row",
//                             alignItems: "center",
//                         },
//                     ]}
//                 >
//                     <Text
//                         style={[
//                             stylesheet._START,
//                             {
//                                 position: "relative",
//                                 flexGrow: 1,
//                                 left: 0,
//                                 top: 0,
//                                 height: "auto",
//                                 transform: [
//                                     { translateX: 0 },
//                                     { translateY: 0 },
//                                 ],
//                             },
//                         ]}
//                     >
//                         START
//                     </Text>
//                 </View>
//                 <View style={stylesheet._Rectangle_26_2}></View>
//                 <View
//                     style={[
//                         stylesheet._RULES,
//                         {
//                             display: "flex",
//                             flexDirection: "row",
//                             alignItems: "center",
//                         },
//                     ]}
//                 >
//                     <Text
//                         style={[
//                             stylesheet._RULES,
//                             {
//                                 position: "relative",
//                                 flexGrow: 1,
//                                 left: 0,
//                                 top: 0,
//                                 height: "auto",
//                                 transform: [
//                                     { translateX: 0 },
//                                     { translateY: 0 },
//                                 ],
//                             },
//                         ]}
//                     >
//                         RULES
//                     </Text>
//                 </View>
//                 <View
//                     style={[
//                         stylesheet._Start_your_controlled_improvisation_exercises_now,
//                         {
//                             display: "flex",
//                             flexDirection: "row",
//                             alignItems: "center",
//                         },
//                     ]}
//                 >
//                     <Text
//                         style={[
//                             stylesheet._Start_your_controlled_improvisation_exercises_now,
//                             {
//                                 position: "relative",
//                                 flexGrow: 1,
//                                 left: 0,
//                                 top: 0,
//                                 height: "auto",
//                                 transform: [
//                                     { translateX: 0 },
//                                     { translateY: 0 },
//                                 ],
//                             },
//                         ]}
//                     >
//                         Start your controlled improvisation exercises now
//                     </Text>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }

// const stylesheet = StyleSheet.create({
//     _Frame_1: {
//         position: "relative",
//         width: Dimensions.get("window").width,
//         height: 800,
//         borderRadius: 0,
//         overflow: "hidden",
//         transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
//         backgroundColor: "rgba(29, 33, 46, 0.6899999976158142)",
//         left: 0,
//         top: 0,
//     },
//     _Rectangle_17: {
//         position: "absolute",
//         width: 186,
//         height: 182,
//         borderRadius: 10,
//         opacity: 1,
//         borderWidth: 1,
//         borderColor: "rgba(236, 42, 42, 0.7599999904632568)",
//         left: 87,
//         right: "auto",
//         top: 71,
//         bottom: "auto",
//         transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
//         shadowColor: "rgb(0, 0, 0)",
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         backgroundColor: "rgba(62, 226, 196, 1)",
//     },
//     _Rectangle_26: {
//         position: "absolute",
//         width: 164,
//         height: 47,
//         borderRadius: 30,
//         opacity: 1,
//         borderWidth: 1,
//         borderColor: "rgba(229, 179, 179, 0.25999999046325684)",
//         left: 98,
//         right: "auto",
//         top: 549,
//         bottom: "auto",
//         transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
//         shadowColor: "rgb(0, 0, 0)",
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         backgroundColor: "rgba(95, 116, 230, 1)",
//     },
//     _START: {
//         position: "absolute",
//         width: 57,
//         height: 22,
//         left: "50%",
//         top: "50%",
//         transform: [
//             { translateX: -28 },
//             { translateY: 162 },
//             { rotate: "0deg" },
//         ],
//         fontFamily: "Open Sans",
//         fontWeight: 700,
//         textDecorationLine: "none",
//         fontSize: 18,
//         color: "rgba(252, 252, 252, 0.8600000143051147)",
//         textAlign: "left",
//         textAlignVertical: "top",
//         letterSpacing: 0.1,
//     },
//     _Rectangle_26_2: {
//         position: "absolute",
//         width: 164,
//         height: 47,
//         borderRadius: 30,
//         opacity: 1,
//         borderWidth: 1,
//         borderColor: "rgba(229, 179, 179, 0.25999999046325684)",
//         left: 98,
//         right: "auto",
//         top: 490,
//         bottom: "auto",
//         transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
//         shadowColor: "rgb(0, 0, 0)",
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         backgroundColor: "rgba(95, 116, 230, 1)",
//     },
//     _RULES: {
//         position: "absolute",
//         width: 57,
//         height: 22,
//         left: "50%",
//         top: "50%",
//         transform: [
//             { translateX: -28 },
//             { translateY: 103 },
//             { rotate: "0deg" },
//         ],
//         fontFamily: "Open Sans",
//         fontWeight: 700,
//         textDecorationLine: "none",
//         fontSize: 18,
//         color: "rgba(252, 252, 252, 0.8600000143051147)",
//         textAlign: "left",
//         textAlignVertical: "top",
//         letterSpacing: 0.1,
//     },
//     _Start_your_controlled_improvisation_exercises_now: {
//         position: "absolute",
//         width: 360,
//         height: 62,
//         left: 0,
//         right: "auto",
//         top: 329,
//         bottom: "auto",
//         transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
//         fontFamily: "Open Sans",
//         fontWeight: 700,
//         textDecorationLine: "none",
//         fontSize: 18,
//         color: "rgba(255, 255, 255, 1)",
//         textAlign: "center",
//         textAlignVertical: "top",
//         letterSpacing: 0.1,
//     },
// });
