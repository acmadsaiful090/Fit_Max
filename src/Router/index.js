import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TrendUp, People, Home2 } from 'iconsax-react-native';
import { Home, Profile, Workouts, AddWorkouts, Login, Register } from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const WorkoutsNavigator = () => {
  return (
    <Stack.Navigator>
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

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Home2 color={color} size={size + 5} />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TrendUp color={color} size={size + 5} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <People color={color} size={size + 5} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, animationTypeForReplace: 'pop' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, animationTypeForReplace: 'pop' }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false, animationTypeForReplace: 'pop' }}
      />
    </Stack.Navigator>
  );
};

export default Router; // Exporting the Router component
