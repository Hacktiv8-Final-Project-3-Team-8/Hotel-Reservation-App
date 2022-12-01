
import { Image, Pressable, Text, TextInput, View } from 'react-native';
// import { styles } from './src/style/style';
import { styles } from '../style/style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/user_redux';

export default function Login() {
  const dispach = useDispatch()
  const navigation = useNavigation()
  const route = useRoute()
  const back = route
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const template = {
    firstName: '',
    lastName: '',
    userName: '',
    email: email,
    password: passw,
    gender: '',
  }
  const login =()=>{
    dispach(addUser(template))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginImage}>
        <Image style={styles.img} source={require('../data/undraw_Login_re_4vu2.png')} />
      </View>
      <View style={styles.login}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{template.email}</Text>
          <Text style={styles.title}>Your Happines</Text>
        </View>
        <TextInput style={styles.input} placeholder='email' onChangeText={(val) => setEmail(val)}></TextInput>
        <TextInput style={styles.input} placeholder='password' onChangeText={(val) => setPassw(val)}></TextInput>
        <Pressable style={styles.primaryButton} onPress={login} ><Text style={styles.textbutton}>Login</Text></Pressable>
      </View>
    </View>
  );
}
