import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, List, SignUp } from '../screens';
import MyDrawer from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;