import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import {useState} from 'react';

const FilmeFlatComponent = ({data}) => {
  const navigation = useNavigation();
  const aa = () => {
    alert('hi');
  };
  const [nota, setNota] = useState(data.Rating);
  const navegar = () => {
    navigation.navigate('FilmeDetalhe', {
      name: data.Title,
      filme: data,
      callback: aa,
    });
  };

  useEffect(() => {
    setNota(data.Rating);
  });

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image
        source={{uri: data.Poster}}
        resizeMode="contain"
        style={{width: 100, height: 100}}
      />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.Title}</Text>
        <Text>{data.Released}</Text>
        <Text>{data.Genre}</Text>
        <View style={styles.rating}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={nota}
            fullStarColor={'darkorange'}
            starSize={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    marginBottom: 5,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  rating: {
    flex: 1,
    alignContent: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  subcontainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilmeFlatComponent;
