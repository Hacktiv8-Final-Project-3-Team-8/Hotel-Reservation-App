import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style/style'

export const Null = () => {
    const navigation = useNavigation()
  return (
    <View style={[{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',paddingVertical:24},styles.container]}>
      <Image source={require('../data/undraw_void_3ggu.png')} style={{width:'80%',height:'80%'}}/>
    </View>
  )
}
