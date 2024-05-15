import React from 'react';
import { View, Text, TextInput} from 'react-native';
import {styles} from './styles'
export function SignIn(){

  return(
    <View style={styles.container}>
      <Text>hello world!</Text>
      <TextInput style={styles.input}/>
    </View>
  );

}