import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ListaFilmes from './screens/ListaFilmes';
import FilmeDetalhe from './screens/FilmeDetalhe';
import FilmeReducer from './src/reducers/FilmeReducer';

const Stack = createStackNavigator();
const store = createStore(FilmeReducer);
function Myapp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'Lista de filmes',
              headerStyle: {
                backgroundColor: '#264653',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
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
    </Provider>
  );
}

export default Myapp;
