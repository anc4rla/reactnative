import React, { useState } from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import {styles} from './styles'
import IllustrationImg from '../assets/illustration.png'
import { StatusBar } from 'expo-status-bar';
export function SignIn(){

  const [text,setText] = useState ("Você não digitou nada ainda");

  return(
    <View style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
      <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>
    <View style ={styles.content}>

      <Text style={styles.title}>
        Organize suas {'\n'}
        Jogatinas {'\n'}
        Facilmente
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games{'\n'}
        favorito com seus amigos
      </Text>

    </View>
    </View>
  );

}