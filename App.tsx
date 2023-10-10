import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTextTitle}>
        Muestra del avatar
      </Text>
      <Card
        avatar={require('./assets/avatar.jpg')}
        title='Brian the avatar'
        body='This is the body of Brian The Avatar Card'
      ></Card>
      <Card
        avatar={require('./assets/ricardio.png')}
        title='Ricardio el de Berserk'
        body='Este tio tiene el corazon igual de grande que su apetito'
      ></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',

  },
});
