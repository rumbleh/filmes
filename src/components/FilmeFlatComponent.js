import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const FilmeFlatComponent = ({data, index}) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('FilmeDetalhe', {
      name: data.Title,
      index,
    });
  };

  const toggleFavorito = () => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: {
        index,
      },
    });
  };

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image
        source={{uri: data.Poster}}
        resizeMode="contain"
        style={styles.thumbnail}
      />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.Title}</Text>
        <Text>{data.Released}</Text>
        <Text>{data.Genre}</Text>
        <View style={styles.estrelas}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={data.Rating}
            fullStarColor={'#e76f51'}
            emptyStarColor={'#e9c46a'}
            starSize={20}
            selectedStar={(v) => avaliar(v)}
          />
        </View>
      </View>

      <View style={styles.containerFavorito}>
        <TouchableOpacity
          onPress={() => toggleFavorito()}
          style={styles.favorito}>
          <Icon
            name="heart"
            color={data.Favorite ? 'red' : 'gray'}
            size={30}></Icon>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9c46a',
    marginBottom: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  subcontainer: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerFavorito: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  estrelas: {
    flex: 1,
    alignItems: 'flex-start',
  },
  favorito: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 8,
    borderRadius: 50,
  },
});

export default FilmeFlatComponent;
