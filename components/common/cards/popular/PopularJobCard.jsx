import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.songContainer}
      onPress={() => handleCardPress(item) }
    >
      
      <TouchableOpacity style={styles.artworkContainer} >
        <Image
          source={{uri: `http://localhost:8080/API/Album/artwork/${item.album.artwork}`}}
          resizeMode='contain'
          style={styles.artwork}
        /> 
      </TouchableOpacity>

        <View style={styles.infoContainer} >
          <Text style={styles.companyName} numberOfLines={1} >
            {item.title}
          </Text>
          <Text style={styles.location} numberOfLines={1} > 
            {item.artist}
           </Text>
           
        </View>

    </TouchableOpacity>
  )



}

export default PopularJobCard