import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
      <Image style={styles.logo} source={require('../pra-fazer-app/assets/logo-pra-fazer.png')}>
        </Image>
        
    </View>
      <View>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
      </View>
 
      <View>
            <TextInput style={styles.input} placeholder="Senha"></TextInput>
      </View>

      <TouchableOpacity style={styles.btn}><Text style={styles.textBtn}>Entrar</Text></TouchableOpacity>
      
      <TouchableOpacity><Text style={styles.textCriarUsuario}>Criar usuário</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f60',
    alignItems: 'center',
    justifyContent: 'center'
   
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 15,
    borderRadius: 10,
    padding: 10, 
    marginBottom: 20,
    width: 300,
  }, 
  btn: {
    backgroundColor: '#070A52',
    padding: 10,
    borderRadius: 10,
    width: 300,

  }, 
  textBtn: {
      color: '#FFF',
      fontSize: 18,
      textAlign: 'center',
  },
  boxLogo: {
    paddingBottom: 20,
  },
  logo: {
    width: 230,
    height: undefined,
    aspectRatio: 300 / 55
  },
  textCriarUsuario:{
    color: '#FFF',
    fontSize: 13,
    paddingTop: 7
  }
});
