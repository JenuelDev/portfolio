import 'react-native-gesture-handler';
import React from 'react';

// screens
import Home from './screens/Home';
import Location from './screens/Locations';

// components
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

// navigatoers
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ header: () => { } }}
          />
          <Stack.Screen
            name="Locations"
            component={Location}
            options={{
              title: 'Find Locations'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
