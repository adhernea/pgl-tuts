import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getDogsFacts } from '../services/dogsFactsService'

const DogsFactsScreen = () => {

  useEffect(() => {
    let dogsFacts: string[] = []
    const fetchData = async () => {
      dogsFacts = await getDogsFacts(10)
      console.log(dogsFacts)
    }
    fetchData();
  }, [])
  

  return (
    <View>
      <Text>DogsFactsScreen</Text>
    </View>
  )
}

export default DogsFactsScreen

const styles = StyleSheet.create({})