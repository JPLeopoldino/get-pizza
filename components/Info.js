import React from 'react';
import { View, Text } from 'react-native';

const Info = ({style, value})=>{
    return(
        <View>   
{/*                                                  ↓ Operador Ternário            */}
            <Text style={style}>Informações - {value ? value : 'Elis Regina'}</Text>
        </View>
    );
}
export default Info;