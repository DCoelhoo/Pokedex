import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    flatList:{
        height: "100%",
        backgroundColor:  "rgba(193, 195, 199, 0.9)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
    },
    titleContainer:{
        height: "10%",
        justifyContent: "space-between",
        padding: "5%",
        marginTop: "10%",
        marginBottom: "10%"
    },
    name: {
        textTransform: "capitalize",
        fontFamily: "Flexo-Medium",
        fontSize: 25,
        color: "black",
        fontWeight: "500",
        textAlign: "center",
    },
    firstContainer: {
        width: "95%",
        flexDirection: "row",
        padding: "5%",
        justifyContent: "space-between",
    },
    subTitle:{
        fontSize: 10,
        fontFamily: "Flexo-Medium",
        color: "black",
        fontWeight: "500",
        textAlign: "left",
        marginBottom: "6%"
    },
});
