import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Pressable, Text, TextInput, Touchable, ScrollView } from 'react-native'
import { styles } from '../style/style'

export const HomePage = () => {
    const navigation = useNavigation()
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
                <TextInput style={styles.input}></TextInput>
            </View>
            <Pressable onPress={()=> navigation.navigate('profile')}>profile</Pressable>
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
