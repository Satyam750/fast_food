
import { images } from '@/constants'
import { CustomHeaderProps } from '@/type'
import { router } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomProfile = ({title}:CustomHeaderProps) => (
  <View className="custom-header">
  <TouchableOpacity onPress={() => router.back()}>
      <Image
          source={images.arrowBack}
          className="size-5"
          resizeMode="contain"
      />
  </TouchableOpacity>

  {title && <Text className="base-semibold text-dark-100">{title}</Text>}

  <Image source={images.search} className="size-5" resizeMode="contain" />
</View>
)

const ProfileAdd = ({name,title,image}:{name:string,title:string,image?:any}) => (
  <View className='flex-row pt-5 pb-5 gap-5'>
                    <View className='h-[10vw] w-[10vw] bg-orange-100 rounded-full items-center justify-center'><Image source={image} className='size-5' resizeMode='contain'/></View>
                    <View>
                      <Text className='text-xl text-gray-100'>{title}</Text>
                      <Text className='text-xl text-gray-950'>{name}</Text>
                    </View>
                 </View>
)

const Profile = () => {
  return (
    <SafeAreaView className="h-full pl-5 pr-5 bg-white-100">
     <ScrollView className='h-full mt-10'>
      <CustomProfile title='Profile'/>
        <View className='flex-1 items-center mt-5 mb-10'>
        <Image source={images.avatar} className='size-28' resizeMode='contain'/>
        </View>
        <View className='bg-white flex-1 pl-5 pr-5 pb-5 w-full rounded-lg'>
        <ProfileAdd title="Full Name" name="Samarth Raj" image={images.user}/>
        <ProfileAdd title="Email" name="satyam@gmail.com" image={images.user}/>
        <ProfileAdd title="Phone Number" name="9340202902" image={images.phone}/>
        <ProfileAdd title="Address - (Home)" name="12,New One,Jalie,New York" image={images.location}/>
        </View>
         <TouchableOpacity className='items-center mt-10 w-full pl-5 pr-5 border-2 border-orange-400 p-4 rounded-full bg-orange-100/50'><Text className='font-bold text-orange-500'>Edit Profile</Text></TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Profile