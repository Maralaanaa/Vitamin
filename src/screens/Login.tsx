// components/Login.js
import React, { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { firebase_auth } from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
//import{ signU}
// import BottomTab from '../navigation/Bottomtab'
import Register from './Register'
// const Login = () => {
//   const [username, setUsername] = useState('maral')
//   const [password, setPassword] = useState('1234')

//   const handleLogin = () => {
//     console.log('Advice button pressed')
//   }
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = firebase_auth
  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
      console.log('Nevtersen')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {/* <Image src="" style={styles.image}></Image> */}
      <Text style={styles.title}>Нэвтрэх</Text>
      <View style={styles.inputNameView}>
        <Icon name="email" style={styles.icon} />
        <TextInput
          placeholder="Нэвтрэх нэр"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInputName}
        />
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

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.loginButton}>
            <Button title="Нэвтрэх" color="black" onPress={signIn} />
          </View>
        </>
      )}
      <View style={styles.textView}>
        {/* <Button title="Нууц үг мартсан?" color="white" onPress={handleLogin} /> */}
        <Button title="Бүртгүүлэх" color="white" onPress={Register} />
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
    fontSize: 30,
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
  textInputPass: {
    paddingLeft: 6,
  },
  top: {
    paddingTop: 15,
    paddingBottom: 10,
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
    fontSize: 13,
  },
  textCreate: {
    paddingLeft: 10,
    color: 'white',
  },
})
export default Login
