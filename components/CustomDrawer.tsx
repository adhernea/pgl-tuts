import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from './CustomHeader';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import appColors from '../assets/styles/appColors';

const Drawer = createDrawerNavigator();


const CustomDrawer = () => {

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    // header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: 'My App Name',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: appColors.primary
    },
    headerTintColor: appColors.white,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: appColors.white,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: 'lightgray',
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide'
  }

  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Homium' }} />
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})