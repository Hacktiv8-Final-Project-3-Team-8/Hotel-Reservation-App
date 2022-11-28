import React from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { styles } from '../style/style'

export const Profile = () => {
    return (
        <View style={[styles.container, { padding: 24 }]}>
            <View style={styles.profileTitle}>My Profiles</View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>User Name</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='HoohTenan' style={styles.profileInput}></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>First Name</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='Abdillah' style={styles.profileInput}></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>Last Name</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='Alhusni' style={styles.profileInput}></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>Email</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='abdikl479@gmail.com' style={styles.profileInput}></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>Gender</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='Lanang' style={styles.profileInput}></TextInput>
            </View>
            <View style={styles.profileList}>
                <View style={styles.profileValue}>Addres</View>
                {/* <View>Abdillah</View> */}
                <TextInput spellCheck={false} underlineColorAndroid='#fff' value='Jl.Jaya No 65' style={styles.profileInput}></TextInput>
            </View>
            <View style={[styles.profileTitle, { marginTop: 24, marginBottom: 12 }]}>Support</View>
            <View style={styles.profileList}>
                <Pressable style={styles.profileValue}>Help</Pressable>
            </View>
            <View style={styles.profileList}>
                <Pressable style={[styles.profileValue,{color : '#121212'}]}>Log Out</Pressable>
            </View>
        </View>
    )
}
