import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Header, Input, Icon } from 'react-native-elements';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Edit/styles';

const Edit = ({ route, navigation })=>{

    const [productName, setProductName] = useState(route.params.name);
    const [productDescription, setProductDescription] = useState(route.params.description);
    const [token, setToken] = useState();

    const saveProduct = async ()=>{
        try {
            const body = {
                name: productName,
                description: productDescription
            }
            await api.put(`/products/${route.params.id}`, body, {
                headers: { 'x-access-token': token }
            })
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async ()=>{
        try {
            await api.delete(`/products/${route.params.id}`, {
                headers: { 'x-access-token': token }
            })
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    const getToken = async ()=>{
        try {
            setToken(await AsyncStorage.getItem('token'));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getToken();
    },[])

    return (
        <View>
            <Header />
            <Image
                source={{
                    uri: route.params.image
                }}
                style={styles.img}
            />
            <Input
                placeholder="Nome do produto"
                value={productName}
                onChange={(value)=>{setProductName(value.nativeEvent.text)}}
                leftIcon={
                    <Icon 
                        type='font-awesome'
                        name='pencil'
                        size={18}
                        color='#888'
                    />
                }
            />
            <Input
                placeholder="Descrição do produto"
                value={productDescription}
                onChange={(value)=>{setProductDescription(value.nativeEvent.text)}}
                leftIcon={
                    <Icon 
                        type='font-awesome'
                        name='comment'
                        size={18}
                        color='#888'
                    />
                }
            />
            <Button
                title="Salvar"
                onPress={saveProduct}
                buttonStyle={styles.savebutton}
            />
            <Button
                onPress={deleteProduct}
                buttonStyle={styles.delbutton}
                icon={
                    <Icon type='font-awesome' name='trash' color='#FFF'/>
                }
            />
        </View>
    )
}

export default Edit;