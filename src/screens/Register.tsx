// components/Login.js
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Register = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Home ruu shiljine
  }

  return (
    <View style={styles.container}>
      {/* <Image src="" style={styles.image}></Image> */}
      <Text style={styles.title}>Бүртгүүлэх</Text>
      <View style={styles.inputNameView}>
        <Icon name="email" style={styles.icon} />
        <TextInput
          placeholder="Мэйл хаяг"
          value={username}
          onChangeText={setUsername}
          style={styles.textInputName}
        ></TextInput>
      </View>
      <View style={styles.top}>
        <View style={styles.inputPassView}>
          <Icon name="key" style={styles.icon} />
          <TextInput
            placeholder="Нууц үг"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.textInputPass}
          />
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.inputPassResetView}>
          <Icon name="key" style={styles.icon} />
          <TextInput
            placeholder="Нууц үг давтах"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.textInputPass}
          />
        </View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textForget}>Нууц үг мартсан?</Text>
        <Button title="Нэвтрэх" color="white" onPress={handleLogin} />
      </View>
      <View style={styles.loginButton}>
        <Button title="Бүртгүүлэх" color="black" onPress={handleLogin} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#716F81',
  },
  image: { width: 200, height: 80, resizeMode: 'contain', marginBottom: 20 },
  title: {
    paddingBottom: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  icon: {
    paddingLeft: 2,
    fontSize: 20,
  },
  inputNameView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#F6AE99',
  },
  textInputName: {
    paddingLeft: 6,
  },

  inputPassView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#F6AE99',
  },
  inputPassResetView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#F6AE99',
  },
  textInputPass: {
    paddingLeft: 6,
  },
  top: {
    paddingTop: 35,
  },
  loginButton: {
    borderRadius: 10,
    width: 180,
    backgroundColor: '#F6AE99',
    color: 'white',
  },
  textView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  textForget: {
    color: 'white',
  },
  textCreate: {
    paddingLeft: 10,
    color: 'white',
  },
})
export default Register
