import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={[{justifyContent:'center',alignItems:'center',flex:1}]}>
        <ActivityIndicator color='#FEE402' size='large'/>
    </View>
  )
}
