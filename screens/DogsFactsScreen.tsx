import React, { useState } from 'react'
import { Image, ImageURISource, Pressable, StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'
import appColors from '../assets/styles/appColors'
import { dogsFactsService } from '../services/dogsFactsService'

const DogsFactsScreen = () => {

  let [displaySpinner, setDisplaySpinner] = useState<boolean>(false);
  let [totalFacts, setTotalFacts] = useState<string>("1");
  let [dogsFacts, setDogsFacts] = useState<string[]>([]);
  let [dogImage, setDogImage] = useState<ImageURISource>({ uri: './../assets/images/courage.png' });

  // useEffect(() => {
  //   let dogsFacts: string[] = []

  //   const fetchData = async () => {
  //     dogsFacts = await getDogsFacts(1)
  //     console.log(dogsFacts)
  //   }

  //   fetchData();
  // }, [])

  const fetchFacts = () => {
    const fetchData = async () => {
      setDisplaySpinner(true)

      const newDogsImgUrl: ImageURISource = { uri: await dogsFactsService.getDogsImageUrl() }
      setDogImage(newDogsImgUrl)

      const newDogsFacts = await dogsFactsService.getDogsFacts(totalFacts)
      setDogsFacts(newDogsFacts)

      setDisplaySpinner(false)
    }

    fetchData();
  }

  return (
    <View style={styles.screenContainer}>
      <Spinner
        visible={displaySpinner}
        textContent={'Requesting dogs facts...'}
        textStyle={{ color: '#FFF' }}
      />
      <Text style={styles.title}>Buscador de curiosidades sobre perros</Text>
      <TextInput
        style={styles.factsInput}
        onChangeText={setTotalFacts}
        value={totalFacts}
        placeholder="Inserta un número"
        keyboardType="numeric"
      />
      <Pressable
        onPress={fetchFacts}
        style={styles.submitButton}
        accessibilityLabel="Find dogs facts"
      >
        <Text style={styles.buttonText}> Find facts! </Text>
      </Pressable>
      <Image
        style={styles.dogImage}
        source={dogImage}
      />
      <FlatList
        style={styles.factsContainer}
        data={dogsFacts}
        renderItem={(fact) => <Text style={styles.fact}>{fact.item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default DogsFactsScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 10
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  factsInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,

  },
  submitButton: {
    backgroundColor: appColors.secondary,
    color: appColors.white,
    width: '50%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: appColors.white,
    textTransform: 'uppercase'
  },
  dogImage: {
    width: 240,
    height: 160,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10
  },
  factsContainer: {
    display: 'flex',
    marginVertical: 10
  },
  fact: {
    width: '80%',
    backgroundColor: appColors.lightGray,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})