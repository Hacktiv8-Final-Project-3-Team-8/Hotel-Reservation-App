import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { BookList } from '../component/bookList'
import { styles } from '../style/style'

export const History = () => {
  return (
    <View style={[styles.container, {  padding: 24 }]}>
      <ScrollView>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
      </ScrollView>
    </View>
  )
}
