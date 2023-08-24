import {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import {COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import axios from 'axios';

const Popularjobs = () => {
  

  const [datas, setDatas] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const [error, setError] = useState();
  const url = 'http://127.0.0.1:8080/API/Songs/all'

  useEffect(()=>{
    axios.get(url).then((response)=>{
        console.log(response)
        setDatas(response.data)
        setIsLoading(false);
    }).catch((err)=>{
        setError(err);
        console.log(err);
    })
},[]);





  // const { data, isLoading, error} = useFetch('all');
  console.log("THIS IS THE LOG :" )
  console.log(datas);
 

  return (
    <View styles={styles.container}>
      <View styles={styles.header}>
        <Text styles={styles.headerTitle}> </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all popular song </Text>
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
             <PopularJobCard
               item = {item} 
             />

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

export default Popularjobs