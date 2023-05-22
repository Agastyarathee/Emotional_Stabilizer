import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import ResilienceScreen from "./screens/Resilience";
import SafeSpaceScreen from './screens/SafeS';
import FomoScreen from './screens/Fomo';
import MentalHealthScreen from './screens/MentalHealth';
import EftScreen from './screens/Eft';
import LoginScreen from './screens/LoginScreen';
import { RotateInUpRight } from 'react-native-reanimated';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Resilience" component={ResilienceScreen} />
        <Stack.Screen name="SafeS" component={SafeSpaceScreen} />
        <Stack.Screen name="Fomo" component={FomoScreen} />
        <Stack.Screen name="Eft" component={EftScreen} />
        <Stack.Screen name="MentalHealth" component={MentalHealthScreen} />
        
       



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;