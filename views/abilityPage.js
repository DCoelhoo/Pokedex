import React from 'react';
import { Text, View, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react'
import infoStyles from "./styles/infoPageStyles"
import styles from "./styles/styles"
import imageBG from "../assets/bg.jpg"
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { v4 as uuid } from 'uuid';
import { round } from 'react-native-reanimated';
import abilityPageStyles from './styles/abilityPageStyles';


export default function abilityPage({ navigation, route }) {

    let [fontsLoaded] = useFonts({
        'Flexo-Medium': require('../assets/fonts/Flexo-Medium.ttf'),
    });



    const pokeNumber = route.params.number
    const abName = route.params.abName
    const url = "https://pokeapi.co/api/v2/ability/" + abName;


    const [effect, setEffect] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    


    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "aplication/json"
            }
        })
            .then(response => response.json())
            .then((json) => {
                setEffect(json.effect_entries);
                setPokemon(json.pokemon);


            })
    }, [])

    function InfoShow(item) {

        const { effect, name } = item.item


 
            return (
                <View>
                    <View style={infoStyles.firstContainer}>
                        <Text style={abilityPageStyles.subTitle}></Text>
                    </View>
                

                <View style={infoStyles.firstContainer}>
                    <Text style={abilityPageStyles.subTitle}>Sorry, this page is not available at the moment..</Text>
                </View>
                </View>
                
            )


    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ImageBackground source={imageBG} style={infoStyles.bgContainer} blurRadius={1}>
                <View style={infoStyles.titleContainer}>
                    <TouchableOpacity styles={styles.iconBtn} onPress={() => navigation.navigate("infoPage")}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={infoStyles.titleView}>
                        <Text style={infoStyles.name}>{route.params.abName}</Text>
                    </View>
                </View>

                <FlatList
                    data={effect, pokemon}
                    keyExtractor={(item) => uuid()}
                    contentContainerStyle={abilityPageStyles.flatList}
                    renderItem={InfoShow}
                >
                </FlatList>

            </ImageBackground>
        );
    }
}