import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Image, Pressable, Text, ScrollView, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { BookList } from '../component/bookList'
import { Input } from '../component/input'
import { userHistory } from '../redux/user_login'
import { styles } from '../style/style'

export const Book = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone1, setPhone1] = useState('')
  const [phone2, setPhone2] = useState('')
  const navigation = useNavigation()
  const dispach = useDispatch()
  const route = useRoute()
  const data = route.params.description
  const checkoutData = {
    name,
    email,
    phone: `${phone1}${phone2}`,
    data
  }
  const checkout = ()=>{
    dispach(userHistory(checkoutData))
    navigation.navigate('history')
  }
 
  
  return (
    <View style={[styles.container, { padding: 24 }]}>
      <View style={styles.profileTitle}>Contact Information</View>
      {/* <Input placeholder={'name'} />
      <Input placeholder={'email'} /> */}
      <View style={[styles.inputBook,]}>
        <TextInput placeholder='name' style={styles.inputChild}></TextInput>
      </View>
      <View style={[styles.inputBook,]}>
        <TextInput placeholder='email' style={styles.inputChild}></TextInput>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.inputBook, { width: '27%' }]}>
          <TextInput placeholder='+62' style={styles.inputChild}></TextInput>
        </View>
        <View style={[styles.inputBook, { width: '70%' }]}>
          <TextInput placeholder='phone number' style={styles.inputChild}></TextInput>
        </View>
        {/* <Input placeholder={'+62'} width={'27%'} />
        <Input placeholder={'phone number'} width={'70%'} /> */}
      </View>
      <View style={[styles.profileTitle, { marginTop: 24 }]}>Price Summary</View>
      <View style={styles.struct}>
        <Text>1 days | 1 rooms</Text>
        <View style={styles.structChild}>
          <Text>Total</Text>
          <Text>${data.min_total_price}</Text>
        </View>
        <View style={styles.structChild}>
          <Text>Payable Now</Text>
          <Text>$1000</Text>
        </View>
      </View>
      <View style={[styles.checkinBox, { position: 'absolute', bottom: 0, left: 0 }]}>
        <Pressable style={styles.checkinBtn} onPress={checkout}>Booking</Pressable>
      </View>
    </View>
  )
}
