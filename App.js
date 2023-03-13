import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store/index';

import HomeScreen from './components/screens/HomeScreen';
import MoviesScreen from './components/screens/MoviesScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="QuickPlay" component={HomeScreen} />
          <Stack.Screen name="Movies" component={MoviesScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  );
}
