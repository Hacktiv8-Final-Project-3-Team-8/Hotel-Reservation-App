import React from 'react'
import { View, Image, Pressable, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { BookList } from '../component/bookList'
import { styles } from '../style/style'

export const History = () => {
  const {history} = useSelector((state)=>state.login)
  return (
    <View style={[styles.container, {  padding: 24 }]}>
      <ScrollView>
        {history.length === 0
        ?
        <Text>Kosong</Text>
        :
        history.map((val)=>(
          <BookList data={val.data}/>
          // <Text>{JSON.stringify(val)}</Text>
        ))
        }
      </ScrollView>
    </View>
  )
}
