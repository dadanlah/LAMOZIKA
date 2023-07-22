
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/home";
import MusicPlayer from "../components/player";


const Stack = createStackNavigator();

export default function Root() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Player" component={Player}/>
        </Stack.Navigator>
    )

}