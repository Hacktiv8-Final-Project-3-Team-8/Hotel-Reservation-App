
import { Image, Pressable, Text, TextInput, View } from 'react-native';
// import { styles } from './src/style/style';
import { styles } from '../style/style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/user_redux';
import { userLogin } from '../redux/user_login';

export default function Login() {
  const { user } = useSelector((state) => state.data)
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
    addres:'',
    history:[],
    like:[]
  }
  const isEmail = user.find((val) => val.email === email)
  const isPass = user.find((val) => val.password === passw)
  const [color, setColor] = useState('#fff')
  const [passcolor, setPasscolor] = useState('#fff')
  const login = () => {
    console.log(user);
    if (email === '') {
      setColor('#F9DEDC')
    }
    else if (passw === '') {
      setPasscolor('#f9dedc')
    }
    else {
      console.log('berisi');
      if (isEmail) {
        console.log('email betul');
        if (isPass) {

          console.log('pass betul');
          dispach(userLogin(template))
          navigation.goBack()
        }
        else{
          console.log('pass salah');
          setPasscolor('#f9dedc')
        }
      }
      else{
        console.log('kamu');
        if (isPass) {
          console.log('kita');
          setColor('#F9DEDC')
        } else {
          console.log('did');
          dispach(addUser(template))
          dispach(userLogin(template))
          navigation.goBack()
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginImage}>
        <Image style={styles.img} source={require('../data/undraw_Login_re_4vu2.png')} />
      </View>
      <View style={styles.login}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Book and Find</Text>
          <Text style={styles.title}>Your Happines</Text>
        </View>
        <TextInput style={[styles.input, { backgroundColor: color }]} placeholder='email' onChangeText={(val) => {
          setColor('#fff')
          setEmail(val)
        }}></TextInput>
        <TextInput style={[styles.input, { backgroundColor: passcolor }]} placeholder='password' onChangeText={(val) => {
          setPasscolor('#fff')
          setPassw(val)
        }}></TextInput>
        <Pressable style={styles.primaryButton} onPress={login} ><Text style={styles.textbutton}>Login</Text></Pressable>
      </View>
    </View>
  );
}
