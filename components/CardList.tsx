import { StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <ImageBackground
      source={require('./../assets/images/blue-sky.jpg')}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.cardListContainer}>
        <Card
          avatar={require('./../assets/images/avatar.jpg')}
          title='Profe the avatar'
          body='
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        This is the body of Brian The Avatar Card
        '
        ></Card>
        <Card
          avatar={require('./../assets/images/ricardio.png')}
          title='Ricardio el de Berserk'
          body='Este tio tiene el corazon igual de grande que su apetito'
        ></Card>
        <Card
          avatar={require('./../assets/images/exdelegado.jpg')}
          title='Van Houten'
          body='El que lleva la gorra de Jurassic Park paratrás.'
        ></Card>
        <Card
          avatar={require('./../assets/images/tchuko.jpg')}
          title='Principe Zuko'
          body='Aquel que lo mismo echa fuego como da corriente.'
        ></Card>
      </ScrollView>
    </ImageBackground>
  )
}

export default CardList

const styles = StyleSheet.create({
  cardListContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})