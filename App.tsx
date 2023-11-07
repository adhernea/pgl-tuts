import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';
import Header from './components/Header';
import React from 'react';
import Body from './components/Body';


export default function App() {
  const [isListRendered, setIsListRendered] = React.useState(true)

  return (
    <View style={styles.appContainer}>
      <Header isListRendered={isListRendered} setIsListRendered={setIsListRendered}></Header>
      <Body isListRendered={isListRendered}></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
