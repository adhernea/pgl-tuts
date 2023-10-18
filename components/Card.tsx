import { Image, ImageProps, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// rnfes to create new Component
type CardProps = {
  avatar: ImageProps,
  title: string,
  body: string,
}

const Card = (props: CardProps) => {

  const { avatar, title, body } = props;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Image
          style={styles.avatarImage}
          source={avatar}
        />
        <Text style={styles.cardTitleText}>{title}</Text>
      </View>
      <ScrollView
        style={styles.cardBodyText}
        nestedScrollEnabled={true}
      >
        <Text> {body} </Text>
      </ScrollView>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
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
    margin: 10,
  }
})
