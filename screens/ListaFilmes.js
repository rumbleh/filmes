import React from 'react';
import {View, FlatList} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import FilmeFlatComponent from '../components/FilmeFlatComponent';
import {useNavigation} from '@react-navigation/native';

const ListaFilmes = ({route, navigation}) => {
  const json = require('../assets/filmes.json');

  return (
    <View>
      <FlatList
        data={json}
        extraData={json}
        renderItem={({item}) => <FilmeFlatComponent data={item} />}
      />
    </View>
  );
};

export default ListaFilmes;
