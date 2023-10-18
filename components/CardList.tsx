import { StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Card from './Card'
import { CardData, cardsData } from '../data/cardsData'

const CardList = () => {
  return (
    <ImageBackground
      source={require('./../assets/images/blue-sky.jpg')}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.cardListContainer}>
        {
          cardsData.map((card: CardData, index: number) =>
            <Card
              avatar={card.image}
              title={card.title}
              body={card.body}
              key={index}
            ></Card>
          )
        }


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