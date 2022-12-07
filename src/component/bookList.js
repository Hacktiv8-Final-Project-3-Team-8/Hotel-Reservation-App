import React from 'react'
import { Pressable,Image,Text,View } from 'react-native'
import { styles } from '../style/style'

export const BookList = ({data}) => {
  return (
    <Pressable style={styles.bookList}>
        <Image
          style={styles.bookImg}
          source={{
            uri: data.main_photo_url,
          }}
        />
        <View style={styles.bookChild}>
          <Text style={styles.textBook}>{data.hotel_name}</Text>
          <Text style={styles.subTextBook}>{data.addres}</Text>
          <Text style={styles.price}>${data.min_total_price}</Text>
        </View>
      </Pressable>
  )
}
