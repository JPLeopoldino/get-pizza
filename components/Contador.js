import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const Contador = ()=>{
    
    const [valor, setValor] = useState(0);

    const sumOne = ()=>{
        setValor(valor+1);
    }

    const subOne = ()=>{
        if(valor>0){
        setValor(valor-1);
        }
    }
    
    return(
        <View>
            <Text style={style.value}>
                {valor}
            </Text>
            <View style={style.main}>
                <TouchableOpacity onPress={ ()=>{subOne()} } style={style.mainButton}>
                    <Text style={style.button}>-1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=>{sumOne()} } style={style.mainButton}>
                    <Text style={style.button}>+1</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main:{
        flexDirection: 'row',
    },
    mainButton:{
        marginHorizontal: 30,
    },
    value:{
        fontSize: 40,
        color: '#FFF',
        padding: 20,
        marginTop: 30,
    },
    button:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#001536',
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 60,
        marginTop: 20,
    }
});

export default Contador;