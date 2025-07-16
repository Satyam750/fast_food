import { Redirect, Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  const isAuthenticated = false
  if(!isAuthenticated) return <Redirect href="/sign-in"/>
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{
        title:"Home",
        // tabBarIcon:{{focused}} =>
      }}/>
     
    </Tabs>
  )
}

export default TabLayout