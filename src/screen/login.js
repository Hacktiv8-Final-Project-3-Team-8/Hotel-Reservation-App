
import { Image, Pressable, Text, TextInput, View } from 'react-native';
// import { styles } from './src/style/style';
import { styles } from '../style/style';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation()
  const route = useRoute()
  const back = route

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
          <TextInput style={styles.input} placeholder='email'></TextInput>
          <TextInput style={styles.input} placeholder='password' ></TextInput>
          <Pressable style={styles.primaryButton} onPress={()=>navigation.goBack()} ><Text style={styles.textbutton}>Login</Text></Pressable>
        </View>
      </View>
  );
}
