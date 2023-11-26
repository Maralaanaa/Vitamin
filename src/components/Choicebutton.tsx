// import React, { useState } from 'react'
// import { View, StyleSheet, Button, Dimensions } from 'react-native'

// const width = Dimensions.get('window').width

// const ChoiceButton = () => {
//   const [selectedButton, setSelectedButton] = useState<number | null>(null)

//   const handleButtonPress = (index: number) => {
//     setSelectedButton(index)
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonStyle}>
//         <Button
//           color={selectedButton === 0 ? '#F6AE99' : 'white'}
//           title="Витамин"
//           onPress={() => handleButtonPress(0)}
//         />
//       </View>
//       <View style={styles.buttonStyle}>
//         <Button
//           color={selectedButton === 1 ? '#F6AE99' : 'white'}
//           title="Хүнс"
//           onPress={() => handleButtonPress(1)}
//         />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   buttonStyle: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     width: 140,
//     height: 60,
//     margin: 10,
//     left: width * 0.09,
//     top: 100,
//   },
// })

// export default ChoiceButton
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions,
} from 'react-native'

const width = Dimensions.get('window').width

const ChoiceButton = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null)

  const handleButtonPress = (index: number) => {
    setSelectedButton(index)
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.buttonStyle,
          selectedButton === 0 && { backgroundColor: '#F6AE99' },
        ]}
        onPress={() => handleButtonPress(0)}
        underlayColor="#F6AE99"
      >
        <Text style={styles.buttonText}>Витамин</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.buttonStyle,
          selectedButton === 1 && { backgroundColor: '#F6AE99' },
        ]}
        onPress={() => handleButtonPress(1)}
        underlayColor="#F6AE99"
      >
        <Text style={styles.buttonText}>Хүнс</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonStyle: {
    borderRadius: 10,
    width: 140,
    height: 40,
    margin: 10,
    left: width * 0.09,
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
  },
})

export default ChoiceButton
