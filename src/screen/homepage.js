import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Image, Pressable, Text, TextInput, Touchable, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../style/style'
import { Feather } from '@expo/vector-icons';
import { fetchCity } from '../redux/city_redux'
import { ListCity } from '../component/listCity'

export const HomePage = () => {

    const navigation = useNavigation()
    const dispach = useDispatch()
    const kota = useSelector((state) => state.city)
    const { login } = useSelector((state) => state.login)
    console.log(login);
    const [city, setCity] = useState('')
    const options = {
        method: 'GET',
        url: 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',
        params: { text: city, languagecode: 'en-us' },
        headers: {
            'X-RapidAPI-Key': '9db0cf554emsh5a13baf728234f3p13c768jsnd40c48fe7168',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    const search = () => {
        dispach(fetchCity(options))
    }
    // useEffect(()=>{

    //     const paste = ()=>{
    //         console.log(user);
    //     }
    //     paste
    // },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                {/* <Image
                    style={styles.drawerImage}
                    source={{
                        uri: 'https://img.icons8.com/material-outlined/24/null/menu--v1.png',
                    }}
                /> */}
                <Text>TURU</Text>
                {!login ?
                    <Pressable style={styles.loginButton} onPress={() => navigation.push('login')}><Text>Login</Text></Pressable>
                    :
                    <Feather name="heart" size={24} color="black" />
                }
            </View>
            {login ?
                <View style={styles.greeting}>
                    <Text style={styles.textWhite}>Hello,</Text>
                    <Text style={styles.textWhite}>{login.email}</Text>
                </View>
                :
                <View />
            }
            <View style={styles.searchBox}>
                <Pressable style={styles.searchBtn} onPress={search} >
                    <Image
                        style={styles.searchImg}
                        source={{
                            uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png',
                        }}
                    />
                </Pressable>
                <TextInput style={styles.input} onChangeText={(val) => setCity(val)}></TextInput>
            </View>
            {/* <Pressable onPress={() => navigation.navigate('book')}>book</Pressable> */}
            <ScrollView style={{ paddingHorizontal: 24, width: '100%' }}>
                {kota.city.length > 0
                ? kota.city.map((val)=>(

                    <ListCity data={val}/>
                ))
                :
                <Text>Kamu</Text>
                }
            </ScrollView>
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
