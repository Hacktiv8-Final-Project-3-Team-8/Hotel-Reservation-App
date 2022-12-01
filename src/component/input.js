import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from '../style/style'

export const Input = (props) => {
    return (
        <View style={[styles.inputBook, { width: props.width, height: props.height }]}>
            <TextInput placeholder={props.placeholder} style={styles.inputChild}></TextInput>
        </View>
    )
}
