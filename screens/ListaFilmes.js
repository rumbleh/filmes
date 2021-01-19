import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import FilmeFlatComponent from '../components/FilmeFlatComponent';

// Carrega os filmes do arquivo JSON
const lista = require('../assets/filmes.json').data;

const ListaFilmes = () => {
  return (
    <View>
      <FlatList
        data={lista}
        extraData={lista}
        renderItem={({item}) => <FilmeFlatComponent data={item} />}
      />
    </View>
  );
};

export default ListaFilmes;
