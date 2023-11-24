import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
// import {Text} from 'react-native';
const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeStyle}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: 'grey',
    height: 'auto',
  },
})

export default Profile
