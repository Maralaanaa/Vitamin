import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
// import {Text} from 'react-native';
import Search from '../components/Search'
const Advice = () => {
  return (
    <View style={styles.homeStyle}>
      <SafeAreaView>
        <Search />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#716F81',
  },
})

export default Advice
