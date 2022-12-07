import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style/style'

export const Exept = () => {
    const navigation = useNavigation()
  return (
    <View style={[{width:'100%',height:'100%',justifyContent:'space-around',alignItems:'center',paddingVertical:24},styles.container]}>
      <Image source={require('../data/undraw_Access_account_re_8spm.png')} style={{width:'100%',height:'80%'}}/>
      <Text style={{fontSize:16}}>Anda Belum Login</Text>
      <Pressable style={styles.loginButton} onPress={()=>navigation.push('login')}><Text>Login</Text></Pressable>
    </View>
  )
}
