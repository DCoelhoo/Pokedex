import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 *  A Stack navigação é uma navegação que guarda os ecras numa pilha e o ecrã mostrado é o que estiver no topo da pilha
 */
const Stack = createStackNavigator();

//Importar as páginas
import homePage from "./views/homePage";
import genOne from "./views/genOne";
import genTwo from "./views/genTwo";
import genThree from "./views/genThree";
import genFour from "./views/genFour";
import genFive from "./views/genFive";
import genSix from "./views/genSix";
import genSeven from "./views/genSeven";
import genEight from "./views/genEight";

import infoPage from "./views/infoPage";
import abilityPage from "./views/abilityPage";




export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="homePage" component={homePage} ></Stack.Screen>
        <Stack.Screen name="genOne" component={genOne} ></Stack.Screen>
        <Stack.Screen name="genTwo" component={genTwo} ></Stack.Screen>
        <Stack.Screen name="genThree" component={genThree} ></Stack.Screen>
        <Stack.Screen name="genFour" component={genFour} ></Stack.Screen>
        <Stack.Screen name="genFive" component={genFive} ></Stack.Screen>
        <Stack.Screen name="genSix" component={genSix} ></Stack.Screen>
        <Stack.Screen name="genSeven" component={genSeven} ></Stack.Screen>
        <Stack.Screen name="genEight" component={genEight} ></Stack.Screen>
        <Stack.Screen name="infoPage" component={infoPage} ></Stack.Screen>
        <Stack.Screen name="abilityPage" component={abilityPage} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}