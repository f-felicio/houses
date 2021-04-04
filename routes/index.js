import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import Details from '../src/screens/Details';
import Collection from '../src/screens/Collection';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="Collection" component={Collection} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
