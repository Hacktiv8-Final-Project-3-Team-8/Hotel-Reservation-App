import React from 'react'
import { View, Image, Pressable,Text } from 'react-native'
import { styles } from '../style/style'

export const ListCity = ({data}) => {
    return (
        <View style={styles.listCity}>
            <Image
                style={[styles.detailImg, { height: 180, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
                source={{
                    uri: data.image_url,
                }}
            />
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 16 }}>{data.name}</Text>
                <Pressable style={[styles.viewMore]}>View More</Pressable>
            </View>
        </View>
    )
}
