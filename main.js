import Expo from 'expo';
import React from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Router from './navigation/Router';
import MainScreen from './screens/MainScreen'
import DrawerView from './components/DrawerView'

class App extends React.Component {

  render() {
    return (
      <NavigationProvider router={Router}>
        <DrawerView/>
      </NavigationProvider>
    );
  }
}

Expo.registerRootComponent(App);
