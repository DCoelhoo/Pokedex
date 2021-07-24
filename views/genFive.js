import { useEffect, useState } from 'react'
import React from 'react'
import { ImageBackground, FlatList, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from "./styles/styles"
import imageBG from "../assets/bg.jpg"
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// POKEAPI: https://pokeapi.co/

export default function genFive({ navigation }) {

	let [fontsLoaded] = useFonts({
		'Flexo-Medium': require('../assets/fonts/Flexo-Medium.ttf'),
	});

	const url = "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493";

	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				"Accept": "aplication/json"
			}
		})
			.then(response => response.json())
			.then(data => { setPokemons(data.results) })
	}, [])

	function PokemonShow(item) {

		const { name, url } = item.item
		const pokeNumber = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
		const genName = "genFive"
		const imageURL = "https://pokeres.bastionbot.org/images/pokemon/" + pokeNumber + ".png"

		return (
			<TouchableOpacity style={styles.pokeBtn} onPress={() => navigation.navigate("infoPage", { name: name, number: pokeNumber, genName: genName, })}>
				<View>
					<Image style={styles.pokeImg} source={{ uri: imageURL }} />
					<Text style={styles.pokeName}>#{pokeNumber} {name}</Text>
				</View>
			</TouchableOpacity>

		)
	}

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<ImageBackground source={imageBG} style={styles.bgContainer} blurRadius={1}>
				<View style={styles.titleContainer}>

					<TouchableOpacity styles={styles.iconBtn} onPress={() => navigation.navigate("homePage")}>
						<AntDesign name="back" size={24} color="black" />
					</TouchableOpacity>

					<Text style={styles.textTitle}>Fifth Generation</Text>


				</View>
				<FlatList
					data={pokemons}
					keyExtractor={(pokemon) => pokemon.name}
					contentContainerStyle={styles.flatList}
					renderItem={PokemonShow}
					numColumns={3}
				/>
			</ImageBackground>
		)
	}
}
