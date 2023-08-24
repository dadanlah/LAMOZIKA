import React from "react";
import {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from "./PopularAlbum.style";
import {COLORS, SIZES } from '../../../constants';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import AlbumCard from '../../common/cards/PopularAlbum/AlbumCard';


const PopularAlbum = () =>{

  const navigation = useNavigation();
    
    const [datas, setDatas] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState();
    const url = 'http://127.0.0.1:8080/API/Album/all'

    const fake=[
        {title:"hello"},
        {title:"45656"}
    ]

    
    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log("RESPONSE ALL ALBUM")
            
            setDatas(response.data)
            console.log(datas)
            setIsLoading(false);
        }).catch((err)=>{
            setError(err);
            console.log(err);
        })
    },[]);
    
    if(isLoading){
      return(
        <View>
          <Text>Loading</Text>
        </View>
      )
    }

return (

<View style={styles.container} >
    <View styles={styles.header}>
        <Text styles={styles.headerTitle}></Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all Album </Text>
        </TouchableOpacity>
    </View>

    <View style={styles.cardsContainer} >
        { isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
           data={datas}
           renderItem={({item})=>(
            <Text>ALBUM</Text>
          // <AlbumCard item={item} />
           
          )}
           keyExtractor = {item => item?.id}
           contentContainerStyle={{columnGap : SIZES.medium}}
           horizontal
          />
        )}
      </View>


</View>


)

}

export default PopularAlbum