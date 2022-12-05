import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { editUser, userLogout } from '../redux/user_login'
import { styles } from '../style/style'

export const Profile = () => {
    const dispach = useDispatch()
    const navigation = useNavigation()
    const { login } = useSelector((state) => state.login)

    const logout = () => {
        dispach(userLogout())
        navigation.navigate('home')
    }
    const [userName, setuserName] = useState(login.userName)
    const [firstName, setFirstName] = useState(login.firstName)
    const [lastName, setLastName] = useState(login.lastName)
    const [email, setEmail] = useState(login.email)
    const [gender, setGender] = useState(login.gender)
    const [password, setPassword] = useState(login.password)
    const [addres, setAddres] = useState(login.addres)
    console.log(email);
    console.log(login);
    const template = {
        firstName,
        lastName,
        userName,
        email,
        password,
        gender,
        addres,
        history:[],
        like:[]
      }
    const changes = ()=>{
        dispach(editUser(template))
    }
    if (login === '') {
        return <Text>Kamu belom login</Text>
    } return (
        <View style={[styles.container, { padding: 24 }]}>
            <View style={styles.profileTitle}>
                <Text>

                    My Profiles
                </Text>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        User Name
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setuserName(val)} value={userName} ></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        First Name
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setFirstName(val)} value={firstName} ></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        Last Name
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setLastName(val)} value={lastName} ></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        Email
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput}  value={email} ></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        Gender
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setGender(val)} value={gender} ></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>
                    <Text>

                        Addres
                    </Text>
                </View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} style={styles.profileInput} onChangeText={(val)=>setAddres(val)} value={addres} ></TextInput>
            </View>
            <View style={[styles.profileTitle, { marginTop: 24, marginBottom: 12 }]}>
                <Text>
                    Support

                </Text>
            </View>
            <View style={styles.profileList}>
                <Pressable style={styles.profileValue}>
                    <Text>

                        Help
                    </Text>
                </Pressable>
            </View>
            <View style={styles.profileList}>
                <Pressable style={[styles.profileValue, { color: '#121212' }]} onPress={changes}>
                    <Text>

                        Save Changes
                    </Text>
                </Pressable>
            </View>
            <View style={styles.profileList}>
                <Pressable style={[styles.profileValue, { color: '#121212' }]} onPress={logout}>
                    <Text>

                        Log Out
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
