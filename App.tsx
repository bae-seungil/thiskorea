import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import MeditationScreen from './src/screens/MeditationScreen';
import WhiteNoiseScreen from './src/screens/WhiteNoiseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2C3E50',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: '명상 & 백색소음' }} 
          />
          <Stack.Screen 
            name="Meditation" 
            component={MeditationScreen} 
            options={{ title: '명상' }} 
          />
          <Stack.Screen 
            name="WhiteNoise" 
            component={WhiteNoiseScreen} 
            options={{ title: '백색소음' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; 