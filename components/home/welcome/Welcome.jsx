import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import {icons, SIZES } from '../../../constants';

const songGenders = ["RAP","DRILL", "ALTERNATIVE"];

const Welcome = () => {
  const router = useRouter();
  const [activeSongGender, setActiveSongGender] = useState('RAP')

  return (
    <View>
      <View style = {styles.container} > 
        <Text style ={styles.userName} >Hello user</Text>
        <Text style ={styles.welcomeMessage} >Welcome to LAMOZIKA</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
        <TextInput 
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder="  what you wanna listen to "
        >
        </TextInput>
     
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {} } >
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >
        <FlatList
          data={songGenders}
          renderItem={({ item }) => (
            <TouchableOpacity
             style={styles.tab(activeSongGender, item)}
             onPress={() => {
              setActiveSongGender(item);
              router.push(`/search/${item}`)
             }}
            >
              <Text style={styles.tabText(activeSongGender,item)} >
               {item} 
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item =>item}
          contentContainerStyle={{
            columnGap:SIZES.small
            
          }}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome