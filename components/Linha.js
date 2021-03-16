import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Linha = ({item})=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={()=>{ navigation.navigate('Description', item) }}
            onLongPress={()=>{ navigation.navigate('Edit', item) }}
        >
            <View style={style.content}>
                <View style={style.line}></View>            
                <Image
                    style={style.image}
                    source={{uri:item.image}}
                />
                <View style={style.itemContent}>
                    <Text style={style.title}>{item.name}</Text>
                    <Text style={style.description}>{item.description}</Text>
                    <Text style={style.price}>R$ {item.price}</Text>
                    <Rating 
                        type='custom'
                        startingValue={item.rating}
                        readonly
                        imageSize={20}
                    />
                </View>            
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    title: {
        color: '#14191f',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    description: {
        color: '#777',
        fontSize: 15,
        textAlign: 'center',
    },
    price: {
        fontSize: 30,
        color: '#02b025',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContent: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
    },
    content: {
        flexDirection: 'row',
        padding: 30,
        borderBottomWidth: 0.3,
        borderColor: '#000',
        backgroundColor: '#FFF'
    },
    image: {
        height: 90,
        width: 120,
        borderRadius: 20,
    },
    // line: {
    //     position: 'absolute',
    //     width: '150%',
    //     height: 1,
    //     backgroundColor: '#FFF',
    // }
})

export { Linha };