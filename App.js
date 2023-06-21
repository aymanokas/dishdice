import { StatusBar } from 'expo-status-bar'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { Provider as PaperProvider, IconButton } from 'react-native-paper'
import SwipeableCards from './SwipeableCards'

export default function App () {
  return (
    <PaperProvider>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View style={styles.swipeArea}>
          <SwipeableCards />
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconBox}>
            <IconButton iconColor='orange' size={18} style={styles.icon} icon='refresh' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <IconButton iconColor='red' size={18} style={styles.icon} icon='close' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <IconButton iconColor='green' size={18} style={styles.icon} icon='heart' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <IconButton iconColor='skyblue' size={18} style={styles.icon} icon='star' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <IconButton iconColor='purple' size={18} style={styles.icon} icon='flash' />
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: '#fff'
  },
  swipeArea: {
    backgroundColor: 'white',
    height: '85%'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#eeeeee',
    padding: 5,
    marginRight: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  icon: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
