import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
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
