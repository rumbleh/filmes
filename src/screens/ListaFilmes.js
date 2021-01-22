import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import FilmeFlatComponent from '../../../components/FilmeFlatComponent';
import {useSelector} from 'react-redux';

const ListaFilmes = () => {
  const lista = useSelector((state) => state.data);

  return (
    <View>
      <FlatList
        data={lista}
        renderItem={({item, index}) => (
          <FilmeFlatComponent data={item} index={index} />
        )}
      />
    </View>
  );
};

export default ListaFilmes;
