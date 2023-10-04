import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTextTitle}>
        Muestra del avatar
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <Image
            style={styles.avatarImage}
            source={require('./assets/avatar.jpg')}
          />
          <Text style={styles.cardTitleText}>Brian the avatar</Text>
        </View>
        <ScrollView style={styles.cardBodyText}>
          <Text>
            Este es el cuerpo del Card con la salud que te otorga el padding,
            el margin, la border, el border, el border, y lo demás.
            Este es el cuerpo del Card con la salud que te otorga el padding,
            el margin, la border, el border, el border, y lo demás.
            Este es el cuerpo del Card con la salud que te otorga el padding,
            el margin, la border, el border, el border, y lo demás.
            Este es el cuerpo del Card con la salud que te otorga el padding,
            el margin, la border, el border, el border, y lo demás.
          </Text>
        </ScrollView>
      </View>
  
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
  cardContainer: {
    width: '90%',
    // flexDirection: 'row',
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 100
  },
  cardTitleContainer: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  cardTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBodyText: {
    // borderWidth: 1,
    // borderColor: 'black',
    // borderStyle: 'solid',
    height: 120,
    marginVertical: 10,
    padding: 10,
  }
});
