import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const CardComponent = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.carouselDots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Card.Cover style={styles.cardCover} source={require('./assets/pizzaSlice.png')} />
      <Card.Content style={styles.cardTitle}>
        <Text style={styles.title} variant='titleLarge'>PEPPERONI PIZZA</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 30,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 0
  },
  carouselDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  cardCover: {
    marginBottom: 70,
    backgroundColor: 'transparent'
  },
  dot: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 30
  },
  cardTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
    margin: 0,
    padding: 0
  }
})

export default CardComponent
