import React from 'react'
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
// import {Text} from 'react-native';
import Search from '../components/Search'
const handleChoice = () => {
  // Handle the logic when the "зөвлөмж" button is pressed
  // For example, navigate to another screen, show a modal, etc.
  console.log('Advice button pressed')
}
const height = Dimensions.get('window').height
const History = () => {
  return (
    <View style={styles.backGround}>
      <SafeAreaView>
        <View>
          <Search />
        </View>
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.buttonStyle}>
            <View style={styles.historyStyle}>
              <Button color="black" title="" onPress={handleChoice} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  backGround: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#716F81',
  },
  scrollStyle: {
    // flex: 1,
    flexDirection: 'column',
    height: height,
    top: 110,
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B97A8D',
    borderRadius: 25,
    height: 40,
    width: 325,
    marginLeft: 33,
  },
  historyStyle: {
    height: height,
    color: '',
  },
})

export default History
