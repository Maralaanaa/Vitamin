import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
// import {Text} from 'react-native';
import Search from '../components/Search'
import ChoiceButton from '../components/Choicebutton'
const Add = () => {
  return (
    <View style={styles.backGround}>
      <SafeAreaView>
        <View>
          <Search />
        </View>
        <View>
          <ChoiceButton />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#716F81',
  },
})

export default Add
