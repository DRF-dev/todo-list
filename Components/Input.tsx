import React, {useState, useEffect} from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './Styles/Style';

import Liste from './Liste'

const Input = () => {
    const [list, setListe] = useState<string[]>([])
    const [todo, setTodo] = useState<string>('')

    return (
        <View>
            <Liste affichage={list}/>
            <View style={styles.inputForm}>
                <TextInput onChangeText={txt => setTodo(txt)} value={todo}/>   
                <Button title="Ajouter" onPress={() => {
                    setListe(() => [...list, todo]),
                    setTodo('')
                }} />
            </View>
        </View>
    );
}

export {}
export default Input