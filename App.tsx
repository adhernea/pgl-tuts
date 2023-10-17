import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';
import appColors from './assets/styles/appColors';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTextTitle}>
        Muestra de personajazos
      </Text>
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
  appTextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 45,
    backgroundColor: appColors.primary,
    width: '100%',
    paddingVertical: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    flex: 1,
  },
  appBody: {
    flex: 20,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});
