import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default function Home({navigation}) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.square]}>
                {/* <Text style={styles.text}>HELLO MY HOME!!!</Text> */}
                <Icon name="home" size={30} color="#4F8EF7" />
            </View>
            <View style={styles.header}> 
                <Text style={[styles.textHeader, {textAlign: "center"}]}>
                    Start your controlled{"\n"} improvisation exercises now
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Rules')}
                style={[
                    styles.btnRules,
                    {
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={styles.textBtn}>RULES</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Start')}
                style={[
                    styles.btnStart,
                    {
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <Text style={styles.textBtn}>START</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(29, 33, 46, 0.69)",
        padding: '2%',
    },
    square: {
        position: "relative",
        width: 180,
        height: 180,
        borderRadius: 30,
        marginTop: 60,
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
    header: {
        marginTop: 80,
        justifyContent: "center",
        alignSelf: "center",
        
        // alignItems: "baseline",
        // right: 0,
        // left: 0,
    },
    btnRules: {
        position: "relative",
        width: 180,
        height: 50,
        alignSelf: "center",
        marginTop: 100,
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
        marginTop: "4%",
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
    textHeader: {
        fontFamily: "OpenSans-Bold",
        fontSize: 25,
        color: "rgba(252, 252, 252, 0.86)",
        letterSpacing: 0.1,
        textAlignVertical: "top",
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