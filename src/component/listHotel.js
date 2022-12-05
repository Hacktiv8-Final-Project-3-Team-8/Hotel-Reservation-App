import React from 'react'
import { View, Pressable, Text, Image } from 'react-native'
import { styles } from '../style/style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userLike, userUnlike } from '../redux/user_login';

export const ListHotel = ({ data }) => {
    const { login, like } = useSelector((state) => state.login)
    const navigation = useNavigation()
    const dispach = useDispatch()
    const isSaved = () => {
        like.find((val) => {
            if (val === data) {
                console.log('like');
            } else {
                console.log('tidak like');
            }
        })
    }
    console.log(like);
    // console.log(isSaved);
    // const favorite = ()=>{
    //     isSaved
    //     ?
    //     console.log('like')
    //     :
    //     console.log('hapus like')
    // }
    const detail = () => {
        navigation.navigate('detail', { description: data })
    }
    return (
        <View style={[styles.listCity, { backgroundColor: '#fff' }]}>
            <Pressable style={[styles.love, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => dispach(userLike(data))}>
                <AntDesign name="heart" size={16} color="gray" />
            </Pressable>
            <Image
                style={[styles.detailImg, { height: 160, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
                source={{
                    uri: data.main_photo_url,
                }}
            />
            <View style={[styles.wrapper, { height: 90 }]}>
                <View style={{ justifyContent: 'space-around', height: '100%', width: '70%' }}>
                    <Text style={{ fontSize: 16 }}>{data.hotel_name}</Text>

                    <Pressable style={[styles.price]} onPress={detail}>${data.min_total_price}</Pressable>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={18} color='#FEE402' />
                    <Text style={{ marginLeft: 6 }}>{data.class}</Text>
                </View>
            </View>
        </View>
    )
}
