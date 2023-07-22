import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/API/Songs/artwork/up9CdGAn')
      .then((response) => response.json())
      .then((json) => setPhotos(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Text>Photos</Text>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          style={{ width: 50, height: 50 }}
          source={{ uri: photo.url }}
        />
      ))}
    </View>
  );
};

export default Photos;
