import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: "center",
        padding: "5%"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
    },
    titleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "5%",
        marginTop: "10%",
        height: "10%"
    },
    textTitle:{
        color: "black",
        fontFamily: "Flexo-Medium",
        fontSize: 25,
        fontWeight: "500",
    },
    textLogo:{
        color: "black",
        fontFamily: "Flexo-Medium",
        fontSize: 18,
        fontWeight: "500",
    },
    textLogoTitle:{
        color: "black",
        fontFamily: "Flexo-Medium",
        fontSize: 25,
        fontWeight: "500",
    },
    logo:{
        width: 120,
        height: 120,
    },
    pokeImg:{
        width: 50,
        height: 50,
    },
    flatList:{
        flexDirection: 'column',
        justifyContent: "space-between",
        paddingLeft: "5%"

    },
    pokeBtn:{
        backgroundColor: "rgba(138, 137, 134, 0.6)",
        marginHorizontal: "2%",
        marginVertical: "2%",
        justifyContent: "center",
        alignItems: "center",
        width: "28%",
        padding: "5%",
        paddingBottom: "2%",
        borderRadius: 15,

    },
    pokeName:{
        textTransform: "capitalize",
        paddingTop: "5%",
        fontFamily: "Flexo-Medium",
        color: "white",
        fontSize: 10
    },
    genBtnTxt:{
        width: Dimensions.get("screen").width * 0.7,
        marginTop: "5%",
        textAlign: "center",
        fontFamily: "Flexo-Medium",
        fontSize: 20,
        color: "black",
        fontWeight: "500",
    },
    genBtnNum:{
        width: Dimensions.get("screen").width * 0.7,
        textAlign: "center",
        fontFamily: "Flexo-Medium",
        fontSize: 14,
        color: "black",
        fontWeight: "500",
        marginBottom: "5%",
    },
    genBtn:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(181, 185, 189, 0.5)",
        borderRadius: 30,
        marginBottom: "5%" ,
        width: "100%"
    },
    btnContainer:{
        height: "50%"
    },
    iconBtn:{
        width: "33%",
    },
    
});
