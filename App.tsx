import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header></Header>
      <View style={styles.appBody}>
        <CardList></CardList>
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
    flex: 20,
  }
});
