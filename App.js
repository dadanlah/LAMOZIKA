import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/index";
import Player from "./screen/player";



const Stack = createStackNavigator();

export default function App() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Player" component={Player}/>
        </Stack.Navigator>
    );
}
