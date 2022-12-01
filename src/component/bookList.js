import React from 'react'
import { Pressable,Image,Text,View } from 'react-native'
import { styles } from '../style/style'

export const BookList = () => {
  return (
    <Pressable style={styles.bookList}>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'https://media.istockphoto.com/id/1016547708/photo/medan-great-mosque-indonesia.jpg?b=1&s=170667a&w=0&k=20&c=1zdBTlr4meOuq6UAJjLl93TX93sN-0NSP4J1rwE5-vk=',
          }}
        />
        <View style={styles.bookChild}>
          <Text style={styles.textBook}>Masjid Raya Al-Mahsun</Text>
          <Text style={styles.subTextBook}>Jl.Sisingamaraja,Medan</Text>
          <Text style={styles.price}>$300</Text>
        </View>
      </Pressable>
  )
}
