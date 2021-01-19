import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';

import {useRoute} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import {useState} from 'react';

const FilmeDetalhe = ({navigation}) => {
  const route = useRoute();
  const [filme] = useState(route.params.filme);
  const [nota, setNota] = useState(filme.Rating);

  const avaliar = (v) => {
    setNota(v);
    filme.Rating = v;
  };

  return (
    <ImageBackground
      source={{uri: filme.Poster}}
      blurRadius={5}
      style={styles.container}>
      <Image source={{uri: filme.Poster}} style={styles.poster} />
      <View style={styles.rating}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={nota}
          fullStarColor={'darkorange'}
          emptyStarColor={'darkorange'}
          starSize={40}
          selectedStar={(v) => avaliar(v)}
        />
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{filme.Title}</Text>
        <Text>Lançamento: {filme.Released}</Text>
        <Text>{filme.Genre}</Text>
        <Text style={styles.enredo}>{filme.Plot}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    flex: 1,
    width: 300,
    height: 600,
    resizeMode: 'center',
    borderRadius: 10,
  },
  rating: {
    flex: 0.1,
    alignContent: 'stretch',
    marginVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  detalhes: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
    color: 'red',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 1,
      height: 20,
    },
    shadowOpacity: 0,
    shadowRadius: 5,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  enredo: {
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 15,
  },
});
export default FilmeDetalhe;
