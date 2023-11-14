import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import appColors from '../assets/styles/appColors';

const Tab = createBottomTabNavigator();

const Body = () => {

  const HomeTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'home'} size={30} color={color} />
    })
  }

  const LoginTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'log-in'} size={30} color={color} />
    })
  }

  const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarInactiveTintColor: 'gray',
    tabBarActiveTintColor: appColors.primary,
    tabBarShowLabel: false,  
  }

  return (
    <View style={styles.appBody}>
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions} >
        <Tab.Screen name='Home' component={HomeScreen} options={HomeTabOptions} />
        <Tab.Screen name='Login' component={LoginScreen} options={LoginTabOptions} />
      </ Tab.Navigator>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  appBody: {
    flex: 20
  }
})