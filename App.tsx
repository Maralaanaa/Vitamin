import React from 'react'
import { StatusBar } from 'react-native'

import BottomTab from './src/navigation/Bottomtab'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <BottomTab />
    </>
  )
}

export default App
