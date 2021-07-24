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


export default function infoPage({ navigation, route }) {

    let [fontsLoaded] = useFonts({
        'Flexo-Medium': require('../assets/fonts/Flexo-Medium.ttf'),
    });
    const pokeNumber = route.params.number
    //const url = "https://pokeapi.co/api/v2/pokemon/" + pokeNumber;
    const imageURL = "https://pokeres.bastionbot.org/images/pokemon/" + pokeNumber + ".png"
    let nextPkm = parseInt(route.params.number) + 1;
    const nextImageURL = "https://pokeres.bastionbot.org/images/pokemon/" + nextPkm + ".png"
    let prevPkm = parseInt(route.params.number) - 1;
    const prevImageURL = "https://pokeres.bastionbot.org/images/pokemon/" + prevPkm + ".png"
    const genName = route.params.genName

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + pokeNumber);
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        callAPI()
    }, [])

    function callAPI() {
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "aplication/json"
            }
        })
            .then(response => response.json())
            .then((json) => {
                setTypes(json.types);
                setAbilities(json.abilities);
                setStats(json.stats);
            })
    }

    function checkFirst() {
        if (prevPkm == 0) {
            return (
                <TouchableOpacity onPress={() => { alert('Work in progress....'); }}>
                    <View style={{ justifyContent: "center", alignContent: "center" }}>
                        <Image style={infoStyles.selectPokeImg} source={{ uri: "https://pokeres.bastionbot.org/images/pokemon/898.png" }} />
                        <Text style={infoStyles.selectPokeNumber}>Nº 898</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={infoStyles.selectPokeBtn} onPress={() => { alert('Work in progress....'); }}>
                    <View>
                        <Image style={infoStyles.selectPokeImg} source={{ uri: prevImageURL }} />
                        <Text style={infoStyles.selectPokeNumber}>Nº {prevPkm}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    function checkLast() {
        if (nextPkm == 899) {
            return (
                <View>
                    <Image style={infoStyles.selectPokeImg} source={{ uri: nextImageURL }} />
                    <Text style={infoStyles.selectPokeNumber}>Soon.....</Text>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => { alert('Work in progress....'); }}>
                    <View>
                        <Image style={infoStyles.selectPokeImg} source={{ uri: nextImageURL }} />
                        <Text style={infoStyles.selectPokeNumber}>Nº {nextPkm}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    function checkType() {
        if (types.length == 2) {
            return (
                <Text style={infoStyles.infoText}>{types[0].type.name} / {types[1].type.name}</Text>
            )
        } else {
            return (
                <Text style={infoStyles.infoText}>{types[0].type.name}</Text>
            )
        }
    }

    function checkAbility() {


        if (abilities.length == 2) {

            const abName1 = abilities[0].ability.name
            const abName2 = abilities[1].ability.name
            const pokeName = route.params.name
            return (
                <View style={infoStyles.secondContainer}>
                    <Text style={infoStyles.subTitle}>Abilities</Text>

                    <TouchableOpacity style={infoStyles.abilities} onPress={() => navigation.navigate("abilityPage", { abName: abName1, pokeName: pokeName, })}>
                        <Text style={infoStyles.abilityText}>{abName1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={infoStyles.abilities} onPress={() => navigation.navigate("abilityPage", { abName: abName2, pokeName: pokeName})}>
                        <Text style={infoStyles.abilityText}>{abilities[1].ability.name}</Text>

                    </TouchableOpacity>
                </View>
            )
        } else {
            const abName1 = abilities[0].ability.name
            const pokeName = route.params.name
            return (
                <View style={infoStyles.secondContainer2}>
                    <Text style={infoStyles.subTitle}>Ability</Text>
                    <TouchableOpacity style={infoStyles.abilities} onPress={() => navigation.navigate("abilityPage", { abName: abName1, pokeName: pokeName })}>
                        <Text style={infoStyles.abilityText}>{abilities[0].ability.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }



    function InfoShow(item) {

        const { slot, type, ability, base_stat } = item.item

        return (
            <View>
                <Image style={infoStyles.pokeImg} source={{ uri: imageURL }} />

                <View style={infoStyles.firstContainer}>
                    {checkFirst()}
                    {checkType()}
                    {checkLast()}
                </View>

                {checkAbility()}

                <View style={infoStyles.thirdContainer}>
                    <Text style={infoStyles.subTitle}>Stats</Text>
                    <Text style={infoStyles.statsText}>HP: {stats[0].base_stat}</Text>
                    <Text style={infoStyles.statsText}>Attack: {stats[1].base_stat}</Text>
                    <Text style={infoStyles.statsText}>Defense: {stats[2].base_stat}</Text>
                    <Text style={infoStyles.statsText}>Special Attack: {stats[3].base_stat}</Text>
                    <Text style={infoStyles.statsText}>Special Defense: {stats[4].base_stat}</Text>
                    <Text style={infoStyles.statsText}>Speed: {stats[5].base_stat}</Text>
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
                    <TouchableOpacity styles={styles.iconBtn} onPress={() => navigation.navigate(genName)}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={infoStyles.titleView}>
                        <Text style={infoStyles.name}>{route.params.name}</Text>
                        <Text style={infoStyles.dexNumber}>Nº {pokeNumber}</Text>
                    </View>
                </View>

                <FlatList
                    data={types, abilities, stats}
                    keyExtractor={(item) => uuid()}
                    contentContainerStyle={infoStyles.flatList}
                    renderItem={InfoShow}
                >
                </FlatList>

            </ImageBackground>
        );
    }
}