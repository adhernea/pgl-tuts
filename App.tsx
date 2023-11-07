import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import React from 'react';
import Body from './components/Body';
import RenderCardListContext from './contexts/RenderCardListContext';


export default function App() {
  const [isListRendered, setIsListRendered] = React.useState(true)

  return (
    <View style={styles.appContainer}>
      <Header isListRendered={isListRendered} setIsListRendered={setIsListRendered}></Header>
      <RenderCardListContext.Provider
        value={true}
      >
        <Body></Body>
      </RenderCardListContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
