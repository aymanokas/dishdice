import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import CardComponent from './Card'

const DATA = [
  { id: 1, name: 'Food 1', type: 'meal 1' },
  { id: 2, name: 'Food 2', type: 'meal 2' },
  { id: 3, name: 'Food 3', type: 'meal 3' }
]

const SwipeableCards = () => {
  useEffect(() => {

  }, [])

  const renderCard = (card) => {
    return <CardComponent {...card} />
  }

  const onSwipeLeft = (index) => {
    console.log(`Swiped left on card at index ${index}`)
  }

  const onSwipeRight = (index) => {
    console.log(`Swiped right on card at index ${index}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        infinite
        cards={DATA}
        renderCard={renderCard}
        onSwipedLeft={onSwipeLeft}
        onSwipedRight={onSwipeRight}
        backgroundColor='transparent'
        cardIndex={0}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'No',
            style: {
              label: {
                backgroundColor: 'red',
                borderColor: 'red',
                color: 'white',
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20
              }
            }
          },
          right: {
            title: 'Yes',
            style: {
              label: {
                backgroundColor: 'green',
                borderColor: 'green',
                color: 'white',
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20
              }
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SwipeableCards
