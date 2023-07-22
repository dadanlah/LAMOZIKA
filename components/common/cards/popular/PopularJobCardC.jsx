import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item) }
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)} >
        <Image
          source={{uri: 'http://localhost:8080/API/Songs/artwork/up9CdGAn'}}
          resizeMode='contain'
          style={styles.artwork}
        /> 
       
      </TouchableOpacity>
        <text style={styles.companyName} numberOfLines={1} >
          {item.emplyer_name}
          Artist name
        </text>
        <View style={styles.infoContainer} >
          <Text styl={styles.jobName(selectedJob, item)} numberOfLines={1} >
            Ttitre album
          </Text>
          <Text style={styles.location} > 
            GENRE
           </Text>
        </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard