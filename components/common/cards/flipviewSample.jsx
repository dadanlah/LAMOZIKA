import styles from './popular/popularjobcard.style';
import { View, Text } from 'react-native';
import GestureFlipView from 'react-native-gesture-flip-card';

const AlbumCard = ( {item} ) => {
  const renderFront = () => {
    return (
      <View style={styles.frontStyle}>
        <Text style={{fontSize: 25, color: '#fff'}}>{item.title}</Text>
        <image
          source={{uri: 'http://localhost:8080/API/Songs/artwork/up9CdGAn' }}
          resizeMode='contain'
          style={styles.artwork}
        />
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={styles.backStyle}>
        <Text style={{fontSize: 25, color: '#fff'}}>BACK</Text>
      </View>
    );
  };

  return (
    <View >
      <GestureFlipView width={300} height={500}>
        {renderBack()}
        {renderFront()}
      </GestureFlipView>
    </View>
  );
};

export default AlbumCard;
