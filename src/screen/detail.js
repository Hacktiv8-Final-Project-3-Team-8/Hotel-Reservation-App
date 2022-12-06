import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../style/style'

export const Detail = () => {
    const navigation = useNavigation()
    const checkout = ()=>{
        if(login === ''){

            navigation.push('login')
        }else{
            // dispach(userHistory())
            navigation.navigate('book',{description:data})
        }
        
    }
    console.log(route.params.description);
    return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.imageBox}>

                        <Image
                            style={styles.detailImg}
                            source={{
                                uri: 'https://media.istockphoto.com/id/1016547708/photo/medan-great-mosque-indonesia.jpg?b=1&s=170667a&w=0&k=20&c=1zdBTlr4meOuq6UAJjLl93TX93sN-0NSP4J1rwE5-vk=',
                            }}
                        />
                        <View style={styles.label}> $300</View>
                    </View>
                    <View style={styles.boxLabel}>
                        <Text style={styles.textLabel}>Masjid Raya Al-Mahsun</Text>
                        <Text style={styles.subText}>Jl.Sisingamaraja,Medan</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={[styles.searchImg, { marginRight: 6 }]}
                                source={{
                                    uri: 'https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png',
                                }}
                            />
                            <Text style={styles.rate}>4.5</Text>
                        </View>
                        <Text style={styles.description}>Description</Text>
                        <View style={styles.descriptionBox}>
                            `                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.checkinBox}>
                    <Pressable style={styles.checkinBtn} onPress={()=>navigation.push('login')}>Booking</Pressable>
                </View>
            </SafeAreaView>
    )
}
