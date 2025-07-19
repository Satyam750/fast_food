import { images } from '@/constants'
import useAuthStore from '@/store/auth.store'
import { Redirect, Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

const Auth_layout = () => {
  const {isAuthenticated} = useAuthStore()
  if(isAuthenticated) return <Redirect href={"/"}/>
  
  return (
  <KeyboardAvoidingView 
  behavior={Platform.OS === 'ios'?'padding':'height'}
  >
    <ScrollView className='bg-white h-full' keyboardShouldPersistTaps="handled">
      <View className='w-full relative' style={{ height: Dimensions.get('screen').height / 2.25}}>
       <ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg' resizeMode='contain'/>
       <Image source={images.logo} className='size-48 absolute -bottom-16 z-10 self-center'/>
      </View>
    <Slot/>
    </ScrollView>
  </KeyboardAvoidingView>
  )
}

export default Auth_layout