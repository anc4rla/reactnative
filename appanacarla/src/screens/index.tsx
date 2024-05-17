import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import {styles} from './styles'
export function SignIn(){
  const [text,setText] = useState ("Você não digitou nada ainda");

  return(
    <View style={styles.container}>
      <Text>hello world!</Text>

      <TextInput style={styles.input} onChangeText={setText}/>
      
      <Text>
        você digitou: {text}
      </Text>
    </View>
  );

}