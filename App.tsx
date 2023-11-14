import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

export default function App() {

  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Header></Header>
        <Body></Body>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
