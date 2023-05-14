import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82caaf',
      }}>
      <Text style={{ color: '#FFF', fontSize: 30, fontWeight:700, marginBottom:30 }}>Selecione uma tela! 🤓</Text>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Button title="Tela 1 😅" onPress={() => navigation.push('Tela 1')} />
        <Button title="Tela 2 😍" onPress={() => navigation.push('Tela 2')} />
     
        <Button title="Tela 3 😉" onPress={() => navigation.push('Tela 3')} />
        <Button title="Tela 4 🙃" onPress={() => navigation.push('Tela 4')} />
        <Button title="Tela 5 🥳" onPress={() => navigation.push('Tela 5')} />
        <Button title="Tela 6 😎" onPress={() => navigation.push('Tela 6')} />
        <Button title="Tela 7 🤨" onPress={() => navigation.push('Tela 7')} />
        </View>
    </View>
  );
};