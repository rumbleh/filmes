import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListaFilmes from './screens/ListaFilmes';
import FilmeDetalhe from './screens/FilmeDetalhe';

const Stack = createStackNavigator();

function Myapp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Lista de filmes'}}
          name="ListaFilmes"
          component={ListaFilmes}
        />
        <Stack.Screen
          name="FilmeDetalhe"
          component={FilmeDetalhe}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Myapp;
