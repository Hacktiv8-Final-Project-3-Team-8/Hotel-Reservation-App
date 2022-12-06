import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Pressable, Text, TextInput, Touchable, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../style/style'

export const HomePage = () => {
    const navigation = useNavigation()
    const dispach = useDispatch()
    const { city, loading } = useSelector((state) => state.city)
    const { login, history } = useSelector((state) => state.login)
    // console.log(login);
    // console.log(history);
    const [color1, setColor1] = useState('#f4f4f4')
    const [color2, setColor2] = useState('#f4f4f4')
    const [kota, setTown] = useState('')
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const ress = () => {
        console.log('kamu');
        dispach(reset('miliku'))
    }
    const search = (kota) => {
        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',
            params: { text: kota, languagecode: 'en-us' },
            headers: {
                'X-RapidAPI-Key': 'bb989f74famsh37e642c1a3d1bb3p134330jsn69c1fb1795e4',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };
        if (checkin === '') {
            if (checkout === '') {

                setColor1('#f9dedc')
                setColor2('#f9dedc')
            }
            setColor1('#f9dedc')
        }
        else if (checkout === '') {
            setColor2('#f9dedc')
        }
        else {

            dispach(fetchCity(options))
        }
    }
    // useEffect(() => {

    //     dispach(fetchHotel("20088325"))
    // }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.drawerImage}
                    source={{
                        uri: 'https://img.icons8.com/material-outlined/24/null/menu--v1.png',
                    }}
                />
                <Pressable style={styles.loginButton} onPress={() => navigation.push('login')}><Text>Login</Text></Pressable>
            </View>
            <View style={styles.greeting}>
                <Text style={styles.textWhite}>Hello,</Text>
                <Text style={styles.textWhite}>Abdillah Zikri</Text>
            </View>
            <View style={styles.searchBox}>
                <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('detail')} >
                    <Image
                        style={styles.searchImg}
                        source={{
                            uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png',
                        }}
                    />
                </Pressable>
                {!login ?
                    <Pressable style={styles.loginButton} onPress={() => navigation.push('login')}><Text>Login</Text></Pressable>
                    :
                    <TouchableOpacity onPress={() => navigation.push('wishlist')}><Feather name="heart" size={24} color="black"/></TouchableOpacity>
                    
                }
            </View>
            <Pressable onPress={()=> navigation.navigate('profile')}>profile</Pressable>
            <Pressable onPress={()=> navigation.navigate('book')}>book</Pressable>
            <Pressable onPress={()=> navigation.navigate('history')}>history</Pressable>
            {/* <ScrollView style={{ paddingHorizontal: 24 }}>

                <View style={styles.list}>
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
                </View>
            </ScrollView> */}
        </View>
    )
}
