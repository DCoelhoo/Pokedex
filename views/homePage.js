import React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles/styles"
import imageBG from "../assets/bg.jpg"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function homePage({ navigation }) {
    let [fontsLoaded] = useFonts({
        'Flexo-Medium': require('../assets/fonts/Flexo-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ImageBackground source={imageBG} style={styles.bgContainer} blurRadius={1}>

                <View style={styles.logoContainer}>
                    <Text style={styles.textLogoTitle}>Welcome Trainer</Text>
                    <Text style={styles.textLogo}>Choose one Pokedex!</Text>
                </View>

                <ScrollView style={styles.btnContainer} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genOne")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>First Generation</Text>
                            <Text style={styles.genBtnNum}>#1 - #151</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genTwo")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Second Generation</Text>
                            <Text style={styles.genBtnNum}>#152 - #251</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genThree")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Third Generation</Text>
                            <Text style={styles.genBtnNum}>#252 - #386</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genFour")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Fourth Generation</Text>
                            <Text style={styles.genBtnNum}>#387 - #493</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genFive")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Fifth Generation</Text>
                            <Text style={styles.genBtnNum}>#494 - #649</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genSix")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Sixth Generation</Text>
                            <Text style={styles.genBtnNum}>#650 - #721</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genSeven")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Seventh Generation</Text>
                            <Text style={styles.genBtnNum}>#722 - #809</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.genBtn} onPress={() => navigation.navigate("genEight")}>
                        <MaterialCommunityIcons name="pokeball" size={35} color="black" />
                        <View>
                            <Text style={styles.genBtnTxt}>Eighth Generation</Text>
                            <Text style={styles.genBtnNum}>#810 - #898</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>



            </ImageBackground>
        );
    }
}