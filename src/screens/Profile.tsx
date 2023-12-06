import React from 'react'
import PImg from '../assets/story.png'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
// import {Text} from 'react-native';
const Profile = () => {
  const handleAdviceButtonPress = () => {
    // Handle the logic when the "зөвлөмж" button is pressed
    // For example, navigate to another screen, show a modal, etc.
    console.log('Advice button pressed')
  }
  return (
    <View style={styles.backGround}>
      <SafeAreaView>
        <View>
          <View style={styles.profileStyle}>
            <Image source={PImg} style={styles.imageStyle} />
            <Text style={styles.usernameStyle}>{'Julie'}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text>{'Имэйл хаяг:'}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text>{'Нас:'}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text>{'Өндөр:'}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text>{'Жин:'}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Text>{'Утасны дугаар:'}</Text>
          </View>
          <View style={styles.viewStyle}>
            <TouchableHighlight
              style={styles.buttonStyle}
              onPress={() => handleAdviceButtonPress}
              underlayColor="#F6AE99"
            >
              <Text style={styles.textStyle}>
                {' Шинжилгээний\nхариу хавсаргах'}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttonStyle}
              onPress={() => handleAdviceButtonPress}
              underlayColor="#F6AE99"
            >
              <Text style={styles.textStyle}>
                {'Хувийн мэдээлэл\n         өөрчлөх'}
              </Text>
            </TouchableHighlight>
            {/* <View style={styles.buttonStyle}>
              <Text style={styles.textStyle}>{'Шинжилгээний хариу'}</Text>
              <Text style={styles.textStyle}>{'хавсаргах'}</Text>
            </View>
            <View style={styles.buttonStyle}>
              <Text style={styles.textStyle}>{'Хувийн мэдээлэл'}</Text>
              <Text style={styles.textStyle}>{'өөрчлөх'}</Text>
            </View> */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#716F81',
  },
  profileStyle: { flexDirection: 'row', alignItems: 'center', margin: 40 },
  imageStyle: { height: 100, width: 100, borderRadius: 50 },
  usernameStyle: {
    color: 'black',
    fontSize: 36,
    marginLeft: 40,
  },
  informationStyle: {
    backgroundColor: '#E5E5E5',
    height: 50,
    width: 325,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: '#B97A8D',
    borderRadius: 25,
    height: 40,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle: {
    top: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
  },
})

export default Profile
