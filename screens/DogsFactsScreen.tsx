import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDogsFacts } from '../services/dogsFactsService'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import appColors from '../assets/styles/appColors'

const DogsFactsScreen = () => {

  let [totalFacts, setTotalFacts] = useState<string>("1");
  let [dogsFacts, setDogsFacts] = useState<string[]>([]);

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
      const newDogsFacts = await getDogsFacts(totalFacts)
      console.log(newDogsFacts)
      setDogsFacts(newDogsFacts)
    }

    fetchData();
  }

  return (
    <View style={styles.screenContainer}>
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
      <FlatList
        style={styles.factsContainer}
        data={dogsFacts}
        renderItem={(fact) => <Text style={styles.fact}>{fact.item}</Text>}
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
  factsContainer: {
    display: 'flex',
    marginVertical: 10
  },
  fact: {
    width: '80%',
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center'
  }
})