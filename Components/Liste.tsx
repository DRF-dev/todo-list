import React, {useState, useEffect, FunctionComponent} from 'react';
import { View, Text } from 'react-native';

const Liste : FunctionComponent<{affichage:string[]}> = ({ affichage }) => {
    const [liste, setListe] = useState<string[]>()

    useEffect(() => {
        setListe(affichage)
    }, [affichage])

    return (
        <View>
            {liste?.map(elm => <Text>{elm}</Text>)}
        </View>
    );
}

export default Liste