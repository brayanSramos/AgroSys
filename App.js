import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginForm from './src/components/LoginForm';



import icon from './assets/AgroSys.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 250, height: 250, resizeMode: 'center'}}/>
      <Text style={{ color: '#fff' }} >AgroSys</Text>
      <LoginForm />
      <LoginForm firstname= "Luisa" lastname="DE Soto te adoro"/>
      <LoginForm firstname="Ggintes" lastname="Garcia"/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
