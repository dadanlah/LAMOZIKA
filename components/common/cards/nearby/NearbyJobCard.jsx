import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../utils';
import { useNavigation } from '@react-navigation/native';


const NearbyJobCard = ({ song }) => {
  
  const navigation = useNavigation();

  const handleNavigate = (name) => {
    console.log("dekdjal: "+name)
  navigation.navigate(name);
    }


  console.log(song.album.artwork);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate("Player") }
    >
      <TouchableOpacity style={styles.artworkContainer} >
        <Image
          source={{uri: `http://localhost:8080/API/Album/artwork/${song.album.artwork}`}}
          resizeMode="contain"
          style={styles.artwork}
        /> 
       
      </TouchableOpacity>
        <View style={styles.textContainer} >
          <Text styl={styles.jobName} numberOfLines={1} >
            {song.title}
          </Text>
          <Text style={styles.jobType} > 
           {song.artist}
           </Text>
        </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard