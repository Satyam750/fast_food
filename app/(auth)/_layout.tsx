import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Auth_layout = () => {
  return (
   <SafeAreaView>
    <Slot/>
   </SafeAreaView>
  )
}

export default Auth_layout