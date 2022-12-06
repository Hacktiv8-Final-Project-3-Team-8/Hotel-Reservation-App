import React, { useState } from 'react'
import { View, Pressable, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../style/style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userLike, userUnlike } from '../redux/user_login';
import { liking, unliking } from '../redux/wish';
import { addHotel, deleteHotel } from "../redux/saveHotel";


export const ListHotel = ({ data }) => {
    const { login} = useSelector((state) => state.login)
    const {like} =useSelector((state)=>state.like)
    const [color,setColor]  = useState('gray')
    const navigation = useNavigation()
    const dispach = useDispatch()

    const savedHotel = useSelector((state) => state.savedHotel);
  
    const handleSaveHotel = () => {
      dispach(addHotel(data));
      console.log("tol");
    };
  
    const handleDeleteHotel = (url) => {
      dispach(deleteHotel(url));
    };

    const isSaved = () => {
        like === 0
            ?
            console.log('kosong')
            :
            like.find((val) => {
                if (val.hotel_name === data.hotel_name) {
                    // dispach(userUnlike(data))
                    console.log('dah ada');
                } else {
                    // dispach(userLike(data))
                    console.log('beom ada');
                }
            })
    }
    console.log(like);
    const ngelike = () => {
        if (like.length > 0) {
            // console.log('ada');
            // console.log(like.length)
            const isYou = like.find((val)=>val.hotel_name === data.hotel_name)
            // like.find((val)=>{
            //     if (val.hotel_name === data.hotel_name) {
            //         console.log('sama');
            //     }
            //     else{
            //         dispach(liking(data))
            //         console.log(like);
            //     }
            // })
            // console.log(isYou);
            // console.log(like);
            if (isYou) {
                setColor('gray')
                dispach(unliking(data.hotel_name))
            }
            else{
                setColor('red')
                dispach(liking(data))
            }
        } else {
            
            dispach(liking(data))
            console.log('kosog');
            console.log(like.length);

        }
    }
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
        <View style={[styles.listCity, { backgroundColor: '#fff',zIndex:1 }]}>
            {savedHotel.some((e) => e.url === data.url) ? (
            <TouchableOpacity style={[styles.love, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => handleDeleteHotel(data.url)}>
                <AntDesign name="heart" size={16} color='red' />
            </TouchableOpacity>
            ) : (
            <TouchableOpacity style={[styles.love, { alignItems: 'center', justifyContent: 'center' }]} onPress={handleSaveHotel}>
                <AntDesign name="heart" size={16} color='gray' />
            </TouchableOpacity>
              )}
            <Image
                style={[styles.detailImg, { height: 160, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
                source={{
                    uri: data.main_photo_url,
                }}
            />
            <View style={[styles.wrapper, { height: 90 }]}>
                <View style={{ justifyContent: 'space-around', height: '100%', width: '70%' }}>
                    <Text style={{ fontSize: 16 }}>{data.hotel_name}</Text>

                    <Pressable style={[styles.price]} onPress={detail}>
                        <Text>

                            ${data.min_total_price}
                        </Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={18} color='#FEE402' />
                    <Text style={{ marginLeft: 6 }}>{data.class}</Text>
                </View>
            </View>
        </View>
    )
}
