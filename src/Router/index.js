import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TrendUp, People, Home2 } from 'iconsax-react-native';
import { Home, Profile,Workouts,AddWorkouts } from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

const WorkoutsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WorkoutsScreen">
      <Stack.Screen
        name="WorkoutsScreen"
        component={Workouts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddWorkouts"
        component={AddWorkouts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          component={WorkoutsNavigator}
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
