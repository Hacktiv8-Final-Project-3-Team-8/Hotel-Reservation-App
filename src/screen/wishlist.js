import React, { useEffect } from 'react'
import { View, ScrollView, Image, Text, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListHotel } from '../component/listHotel'
import { Null } from '../component/null'
import { styles } from '../style/style'

export const Wishlist = () => {
    const savedHotel= useSelector((state) => state.savedHotel)
    const dispach = useDispatch()

    const savedNews = useSelector((state) => state.savedNews);

    return (
        <>
            {savedHotel.length === 0
                ?
                <Null />
                :
                <ScrollView style={styles.hotel}>
                    {savedHotel.map((data, ind) => (
                        <ListHotel key={ind} data={data} />
                    ))
                    }
                </ScrollView>
            }
        </>
    )
}