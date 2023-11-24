import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
// import {Text} from 'react-native';
import Search from '../components/Search'
const History = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeStyle}>
        <Search />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: 'grey',
    height: 'auto',
  },
})

export default History
