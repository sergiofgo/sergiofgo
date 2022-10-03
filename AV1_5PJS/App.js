import React,{useState} from 'react';
import {TouchableOpacity,Image, Text,TextInput,Button,View,StyleSheet} from 'react-native';
import logo from './assets/faeterj_img.jpg'
import cadeado from './assets/cadeado.png'
import dialogo from './assets/dialogo.png'
import pix from './assets/pix.png'
export default function App () {

  return (
    <View style = {styles.box}>
      <Image source = {logo} style = {styles.faeterj}/>
      <Text style = {styles.texto1}>Banco Faeterj</Text>
      <Text style = {styles.texto2}>Minha Conta: </Text>
      <Text style = {styles.texto3}>Agencia:**03 </Text>
      <Text style = {styles.texto4}>Conta Corrente:**23-6 </Text>
      
      <Button title="Acessar Conta" onPress={() => Linking.openURL('https://www.google.com/')}style = {styles.botao}/>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image source = {pix} style = {styles.pix}/>
      </TouchableOpacity>
     
       <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Text style = {styles.texto6}>Ana</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Text style = {styles.texto7}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image source = {dialogo} style = {styles.dialogo}/>
      </TouchableOpacity>

       <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image source = {cadeado} style = {styles.cadeado}/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
        <Text style = {styles.texto5}>Chave de Seguranca</Text>
      </TouchableOpacity>
      

    </View>

  );
}

const styles = StyleSheet.create ({
  box: {flex: 1,backgroundColor: "#1e384c",
  },
  faeterj:{width:100, height: 50,
  },
  cadeado:{width:25, height: 25,marginLeft:20,marginTop:240
  },
  pix:{width:20, height: 20,left:285,top:320, position:"relative"
  },
  dialogo:{width:32, height: 32,left:140,top:273, position:"relative"
  },
  botao:{color:"#ffffff",fontFamily:"Consolas"},
  texto1:{color:"#ffffff",fontFamily:"Consolas", marginLeft: 105,marginTop: -30},
  texto2:{color:"#ffffff",fontFamily:"Consolas",left: 25, top: 150,position:"relative"},
  texto3:{color:"#ffffff",fontFamily:"Consolas",left: 15, top: 180,position:"relative"},
  texto4:{color:"#ffffff",fontFamily:"Consolas",left: 135, top: 163,position:"relative"},
  texto5:{color:"#ffffff",fontFamily:"Consolas",fontSize: 7,marginTop:6},
  texto6:{color:"#ffffff",fontFamily:"Consolas",fontSize: 9,marginLeft:148,top:320, position:"relative"},
  texto7:{color:"#ffffff",fontFamily:"Consolas",fontSize: 9,marginLeft:287,top:310, position:"relative"},

});