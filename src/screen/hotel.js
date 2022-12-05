import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ScrollView, Image, Text, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ListHotel } from '../component/listHotel'
import { fetchHotel } from '../redux/hotel'
import { styles } from '../style/style'


export const Hotel = () => {
    const {hotel,loading} = useSelector((state)=>state.hotel)
    const dispach = useDispatch()
    const route = useRoute()
    const listing = ()=>{
        dispach(fetchHotel(route.params.destination))
        console.log('ngelist');
    }
    useEffect(()=>{
        listing()
    },[])
    console.log(hotel);
    return (
        <ScrollView style={styles.hotel}>
            {/* <View>
                <Image
                    style={styles.detailImg}
                    source={{
                        uri: 'https://media.istockphoto.com/id/1016547708/photo/medan-great-mosque-indonesia.jpg?b=1&s=170667a&w=0&k=20&c=1zdBTlr4meOuq6UAJjLl93TX93sN-0NSP4J1rwE5-vk=',
                    }}
                />
            </View> */}
            {/* <View style={styles.list}>
                <Image
                    style={styles.listImg}
                    source={{
                        uri: 'https://media.istockphoto.com/id/1016547708/photo/medan-great-mosque-indonesia.jpg?b=1&s=170667a&w=0&k=20&c=1zdBTlr4meOuq6UAJjLl93TX93sN-0NSP4J1rwE5-vk=',
                    }}
                />
                <View style={styles.listLabel}>
                    <Text style={styles.textKecil}>Masjid Raya Al-Mahsun</Text>
                </View>
                <Pressable style={styles.love}></Pressable>
            </View> */}
            {loading
            ?
            // hotel.result.map((val,ind)=>(
            //     // <ListHotel key={ind} data={val}/>
            //     console.log(hotel)
            // ))
            <Text>Kamu</Text>
            :
            hotel.map((data,ind)=>(
                <ListHotel key={ind} data={data}/>
                // <Text>{JSON.stringify(data)}</Text>
            ))
        }
        </ScrollView>
    )
}
