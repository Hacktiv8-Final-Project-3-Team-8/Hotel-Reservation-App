import React from 'react'
import { View, Image, Pressable, Text, ScrollView, TextInput } from 'react-native'
import { BookList } from '../component/bookList'
import { Input } from '../component/input'
import { styles } from '../style/style'

export const Book = () => {
  return (
    <View style={[styles.container, { padding: 24 }]}>
      <View style={styles.profileTitle}>Contact Information</View>
      <Input placeholder={'name'} />
      <Input placeholder={'email'} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Input placeholder={'+62'} width={'27%'} />
        <Input placeholder={'phone number'} width={'70%'} />
      </View>
      <View style={[styles.profileTitle, { marginTop: 24 }]}>Price Summary</View>
      <View style={styles.struct}>
        <Text>3 days | 1 rooms</Text>
        <View style={styles.structChild}>
          <Text>Total</Text>
          <Text>$900</Text>
        </View>
        <View style={styles.structChild}>
          <Text>Payable Now</Text>
          <Text>$1000</Text>
        </View>
      </View>
      <View style={[styles.checkinBox,{position:'absolute',bottom:0,left:0}]}>
        <Pressable style={styles.checkinBtn} onPress={() => navigation.push('login')}>Booking</Pressable>
      </View>
    </View>
  )
}
