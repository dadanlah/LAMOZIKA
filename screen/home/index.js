import React from "react";
import {View, ScrollView, SafeAreaView } from "react-native";
import {COLORS, icons, images, SIZES} from "../../constants";
import {PopularAlbum, Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../../components";
// import  Welcome  from "../../components/home/welcome/Welcome";

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stackk = createStackNavigator();

const HomeScreen = () => {
   return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>

    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{
        flex: 1,
        padding: SIZES.medium
    }} >
        <Welcome/>
        <Popularjobs/>
        <PopularAlbum/>
        <Nearbyjobs/> 
        
    </View>
    </ScrollView>
</SafeAreaView>
    )
   
}
export default HomeScreen