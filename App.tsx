import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';
import Header from './components/Header';
import React from 'react';


export default function App() {
  const [isListRendered, setIsListRendered] = React.useState(true)

  return (
    <View style={styles.appContainer}>
      <Header isListRendered= {isListRendered} setIsListRendered={setIsListRendered}></Header>
      <View style={styles.appBody}>
        {
          isListRendered ?
          <CardList></CardList>
          :
          <Text>Nada que mostrar</Text>
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBody: {
    flex: 20
  }
});
