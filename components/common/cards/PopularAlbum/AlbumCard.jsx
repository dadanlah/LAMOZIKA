import styles from './albumStyles';
import { View, Text, Image,TouchableOpacity, } from 'react-native';
import GestureFlipView from 'react-native-gesture-flip-card';

const AlbumCard = ( {item} ) => {
  
 console.log("ALBUM CARD" , item.artist)
  return (
    <View >
      <GestureFlipView width={400} height={500}>
        {RenderBack()}
        {RenderFront(item)}
        {/* <RenderBack/>
        <RenderFront/> */}
      </GestureFlipView>
    </View>
  );
};

const RenderFront = ({item}) => {
  
  return (
    <View style={styles.logoImage}>
      <Text style={{fontSize: 25, color: '#fff'}}>{item.artist}</Text>
      <Image
        source={{uri: 'http://localhost:8080/API/Songs/artwork/up9CdGAn' }}
        resizeMode='contain'
        style={styles.artwork}
      />
    </View>
  );
};

const RenderBack = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={{fontSize: 25, color: '#fff'}}>BACK</Text>
    </View>
  );
};
export default AlbumCard;