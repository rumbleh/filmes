import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FilmeFlatComponent = ({data}) => {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('FilmeDetalhe', {
      name: data.Title,
      filme: data,
    });
  };

  const [favorito, isFavorito] = useState(false);

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
      </View>

      <View style={styles.containerFavorito}>
        <TouchableOpacity
          onPress={() => isFavorito(!favorito)}
          style={styles.favorito}>
          <Icon name="heart" color={favorito ? 'red' : 'gray'} size={30}></Icon>
        </TouchableOpacity>
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
  favorito: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 8,
    borderRadius: 50,
  },
});

export default FilmeFlatComponent;
