import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import React from 'react';
import Body from './components/Body';
import RenderCardListProvider from './providers/RenderCardListProvider';


export default function App() {

  return (
    <View style={styles.appContainer}>
      <RenderCardListProvider>
        <Header></Header>
        <Body></Body>
      </RenderCardListProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
