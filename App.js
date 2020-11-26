import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// Screen
import {OnBoarding} from './screens/';
import {COLORS, icons, SIZES} from './constants';

// Tabs
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'OnBoarding'}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{ marginLeft: SIZES.padding }}
              onPress={onPress}
            >
            <Image
              source={icons.back}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
              }}
            />    
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: SIZES.padding }}
              onPress={() => console.log("Menu")}
            >
              <Image
                source={icons .menu}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            
            </TouchableOpacity>
          )


          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
