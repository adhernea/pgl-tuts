import { StyleSheet, ScrollView, ImageBackground, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { CardData, cardsData } from '../data/cardsData'

const CardList = () => {
  return (
    <View style={styles.cardListContainer}>

      <ImageBackground
        source={require('./../assets/images/blue-sky.jpg')}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.cardListScrollView}>
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
    </View>
  )
}

export default CardList

const styles = StyleSheet.create({
  cardListContainer: {
    flex: 20,
  },
  cardListScrollView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})