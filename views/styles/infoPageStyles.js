import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: "center",
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
    secondContainer: {
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: "23%",
        width: "90%",
        padding: "2%",
        alignSelf: "center"
    },
    secondContainer2: {
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: "17%",
        width: "90%",
        padding: "2%",
        alignSelf: "center",
        marginBottom: "5%"
    },
    thirdContainer: {
        height: "50%",
        width: "90%",
        padding: "2%",
        alignSelf: "center"
    },
    abilities:{
        flexDirection: "row",
        borderLeftColor: "green",
        borderLeftWidth: 2,
        marginBottom: "5%",
        marginRight: "5%",
        width:"100%",
    },
    abilityText:{
        textTransform: "capitalize",
        fontSize: 18,
        fontWeight: "100",
        fontFamily: "Flexo-Medium",
        color: "black",
        marginLeft: "5%",
    },
    subTitle:{
        fontSize: 25,
        fontFamily: "Flexo-Medium",
        color: "black",
        fontWeight: "500",
        textAlign: "left",
        marginBottom: "6%"
    },
    statsText:{
        fontSize: 17,
        fontFamily: "Flexo-Medium",
        color: "black",
        fontWeight: "100",
        textAlign: "left",
        marginBottom: "3%"
    },
    infoText:{
        textTransform: "capitalize",
        fontSize: 15,
        fontFamily: "Flexo-Medium",
        color: "black",
        fontWeight: "100",
        textAlign: "center",
        width: "50%"
    },
    dexNumber: {
        fontSize: 18,
        fontFamily: "Flexo-Medium",
        color: "black",
        fontWeight: "500",
        textAlign: "center"
    },
    pokeImg:{
        height: 90,
        width: 90,
        marginTop: "3%",
        alignSelf: "center"
    },
    selectPokeImg:{
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    backBtn:{
        marginRight: "10%",
    },
    selectPokeNumber:{
        marginTop: "5%",
        textAlign: "center",
        fontSize: 10,
        fontFamily: "Flexo-Medium",
    },
    pokeBtn:{
        backgroundColor: "rgba(138, 137, 134, 0.6)",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        borderRadius: 30,

    },
    flatList:{
        height: "100%",
        backgroundColor:  "rgba(193, 195, 199, 0.9)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
    },
    antRight:{

    }
    
});