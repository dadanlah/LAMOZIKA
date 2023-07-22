import {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import {COLORS} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import axios from 'axios';

const Nearbyjobs = () => {
  const router = useRouter();
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
  console.log("THIS IS THE NEARBY LOG :" )
  console.log(datas);
 

  return (
    <View styles={styles.container}>
      <View styles={styles.header}>
        <Text styles={styles.headerTitle}> HIRAJIABY </Text>
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
          datas?.map((song) => (
            <NearbyJobCard
              song={song}
            />
          ) ) 
        )}
      </View>

    </View>
  )
}

export default Nearbyjobs