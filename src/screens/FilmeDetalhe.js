import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import {useSelector, useDispatch} from 'react-redux';

const FilmeDetalhe = ({navigation}) => {
  const index = useRoute().params.index;
  const filmes = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const toggleFavorito = () => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: {
        index,
      },
    });
  };

  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <View style={{paddingRight: 10}}>
          <Button
            onPress={() => toggleFavorito()}
            title={filmes[index].Favorite ? '♥' : '💔'}
            color="#f8edeb"
          />
        </View>
      ),
    });
  });

  const avaliar = (stars) => {
    dispatch({
      type: 'SET_RATING',
      payload: {
        index,
        stars,
      },
    });
  };

  return (
    <ImageBackground
      source={{uri: filmes[index].Poster}}
      blurRadius={5}
      style={styles.container}>
      <Image source={{uri: filmes[index].Poster}} style={styles.poster} />
      <View style={styles.rating}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={filmes[index].Rating}
          fullStarColor={'darkorange'}
          emptyStarColor={'darkorange'}
          starSize={40}
          selectedStar={(v) => avaliar(v)}
        />
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.titulo}>{filmes[index].Title}</Text>
        <Text>Lançamento: {filmes[index].Released}</Text>
        <Text>{filmes[index].Genre}</Text>
        <Text style={styles.enredo}>{filmes[index].Plot}</Text>
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
