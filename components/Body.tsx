import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardList from './CardList'

type BodyProps = {
  isListRendered: boolean;
}

const Body = (props: BodyProps) => {
  const { isListRendered } = props;
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