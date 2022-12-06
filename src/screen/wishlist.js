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
        // <View style={[styles.container, { padding: 24 }]}>
        //     <View style={styles.profileTitle}>
        //         <Text>

        //             My Profiles
        //         </Text>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 User Name
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setuserName(val)} value={userName} ></TextInput>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 First Name
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setFirstName(val)} value={firstName} ></TextInput>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 Last Name
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setLastName(val)} value={lastName} ></TextInput>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 Email
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput}  value={email} ></TextInput>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 Gender
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setGender(val)} value={gender} ></TextInput>
        //     </View>
        //     <View style={styles.profileList}>
        //         <View style={styles.profileValue}>
        //             <Text>

        //                 Addres
        //             </Text>
        //         </View>
        //         {/* <View>Abdillah</View> */}
        //         <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setAddres(val)} value={addres} ></TextInput>
        //     </View>
        //     <View style={[styles.profileTitle, { marginTop: 24, marginBottom: 12 }]}>
        //         <Text>
        //             Support

        //         </Text>
        //     </View>
        //     <View style={styles.profileList}>
        //         <Pressable style={styles.profileValue}>
        //             <Text>

        //                 Help
        //             </Text>
        //         </Pressable>
        //     </View>
        //     <View style={styles.profileList}>
        //         <Pressable style={[styles.profileValue, { color: '#121212' }]} onPress={changes}>
        //             <Text>

        //                 Save Changes
        //             </Text>
        //         </Pressable>
        //     </View>
        //     <View style={styles.profileList}>
        //         <Pressable style={[styles.profileValue, { color: '#121212' }]} onPress={logout}>
        //             <Text>

        //                 Log Out
        //             </Text>
        //         </Pressable>
        //     </View>
        // </View>
    )
}
