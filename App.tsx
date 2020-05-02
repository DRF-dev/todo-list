import React from 'react';
import { Text, View } from 'react-native';

import { styles } from "./Components/Styles/Style"
import Input from "./Components/Input"
import Liste from "./Components/Liste" 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo-Liste</Text>
      <Input/>
    </View>
  );
}