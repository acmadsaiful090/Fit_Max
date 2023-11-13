import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Workouts, Profile } from '../screens';
import { TrendUp, People, Home2 } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
          },
          tabBarIconStyle: {
            marginBottom: 5, 
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, 
            tabBarIcon: ({ color, size }) => <Home2 color={color} size={size + 5} />,
          }}
        />
        <Tab.Screen
          name="Workouts"
          component={Workouts}
          options={{
            headerShown: false, 
            tabBarIcon: ({ color, size }) => <TrendUp color={color} size={size + 5} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false, 
            tabBarIcon: ({ color, size }) => <People color={color} size={size + 5} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
