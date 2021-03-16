import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from 'react-native-elements';
import styles from './styles';
import api from '../../services/api';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const CreateUser = () => {
    
    const navigation = useNavigation();
    
    const initialValues = {
        userName: '',
        password: '',
        email: ''
    }

    const saveUser = async (value)=>{
        try {
            await api.post('/users', value);
            navigation.navigate('Login');
        } catch (error) {
            Toast.show({
                text1: 'Erro ao criar conta',
                text2: 'Ocorreu um erro ao criar a conta. Tente novamente mais tarde',
                type: 'error'
            });
            console.log(error);
        }
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => saveUser(values)}
        >
    
            {({ handleChange, handleSubmit, handleBlur, values }) => (
                <View style={styles.container}>
                    <Toast ref={(ref) => Toast.setRef(ref)}/>
                    <Input
                        placeholder='Username'
                        value={values.userName}
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')}
                    />
                    <Input
                        placeholder='Email'
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    <Input
                        placeholder='Senha'
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                    />
                    <Button
                        title="Criar conta"
                        onPress={handleSubmit}
                        disabled={values.name === '' || values.email === '' || values.password === ''}
                    />
                </View>
            )}
        </Formik>
    );
}
export default CreateUser;