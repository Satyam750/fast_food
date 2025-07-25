import { CustomInputProps } from '@/type'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType="default"
}:CustomInputProps) => {
    const [isFocused,setIsFocused] = useState(false)
  return (
    <View className='w-full'>
      <Text className='label'>{label}</Text>
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={()=>setIsFocused(true)}
      onBlur={()=>setIsFocused(false)}
      placeholderTextColor="#888"
      className={`input ${isFocused ? 'border-primary':'border-gray-300'}`}
      />
    </View>
  )
}

export default CustomInput