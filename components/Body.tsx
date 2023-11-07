import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardList from './CardList'
import RenderCardListContext from '../contexts/RenderCardListContext'


const Body = () => {

  const isListRendered: boolean = React.useContext(RenderCardListContext)

  return (
    <View style={styles.appBody}>
      {
        isListRendered ?
          <CardList></CardList>
          :
          <Text>Nada que mostrar</Text>
      }
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  appBody: {
    flex: 20
  }
})