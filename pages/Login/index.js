import React, { useEffect, useState } from 'react';
import {View, Alert, ToastAndroid } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native'; //hooks
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import useAuth from '../../hooks/useAuth';

const Login = ()=>{

    const navigation = useNavigation();
    const authentication = useAuth();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(true);

    const auth = async()=>{
        try{
            const response = await api.post('/login',{
                userName: userName,
                password: password
            });
            setDataStorage('auth', JSON.stringify(response.data));
        } catch (error) {
            Toast.show({
                text1: 'Erro',
                text2: 'Usuário ou senha incorretos',
                type: 'success',
                autoHide: false
            });
            console.log(error);
            // Alert.alert(
            //     "Erro ao autenticar",
            //     "Nome de usuário ou senha incorretos",
            //     [
            //         { text: "OK", onPress: ()=> { } }
            //     ],
            //     {cancelable: false}
            // )
        }
    }

    const setDataStorage = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
            getDataStorage();
        } catch (error) {
            // ToastAndroid.show('Erro ao salvar dados', ToastAndroid.SHORT);
            Toast.show({
                text1: 'Hello',
                text2: 'Other text',
                type: 'error'
            });
        }
    }

    const getDataStorage = async ()=>{
        try {
            const token = await AsyncStorage.getItem('auth');
            if(token !== null){
                navigation.navigate('Home');
            }
        } catch (error) {
            ToastAndroid.show('Dados não encontrados', ToastAndroid.SHORT);
        }
    }

    useEffect(()=>{
        // getDataStorage();
        if (authentication?.token != ''){
            navigation.navigate('Home');
        }
    }, []);

    return(
        <View style={styles.center}>
        <Toast ref={(ref) => Toast.setRef(ref)}/>
            <Input 
                placeholder='Nome de usuário'
                leftIcon={
                    <Icon 
                        name='person'
                        size={24}
                        color='#888'
                    />
                }
                value={userName}
                onChange={(value)=> setUserName(value.nativeEvent.text)}
            />
            <Input 
                placeholder='Senha'
                leftIcon={
                    <Icon 
                        name='lock'
                        size={24}
                        color='#888'
                    />
                }
                rightIcon={
                    <Icon 
                        name={eye ? 'visibility' : 'visibility-off'}
                        size={24}
                        color='#AAA'
                        onPress={()=> setEye(!eye)}
                    />
                }
                secureTextEntry={eye}
                value={password}
                onChange={(value)=> setPassword(value.nativeEvent.text)}
            />
            <Button 
                title='Entrar'
                icon={
                    <Icon
                        name='login'
                        size={20}
                        color='#fff'
                    />
                }
                onPress={auth}
            />
            <Button
                title='Criar conta'
                icon={
                    <Icon
                        name='person-add'
                        size={20}
                        color="#fff"
                    />
                }
                onPress={() => navigation.navigate('CreateUser')}
            />
        </View>
    );
}

export default Login;