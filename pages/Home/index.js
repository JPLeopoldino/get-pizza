import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { Linha } from '../../components/Linha';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import styles from './styles';
import api from '../../services/api';
import { SpringUtils } from 'react-native-reanimated';

/*
  Componentes funcionais - stateless 
  Componentes a partir de classe - statefull
*/

const App = ()=>{

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('');

    const loadingData = async ()=>{
        if(token !== ''){
            try {
                const response = await api.get('/products',{
                    headers: { 'x-access-token': token }
                });
                setDados(response['data']);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
    }

    const Spinner = ()=>{
        return (loading ? <ActivityIndicator size="large" color="#00000ff" /> : null);
    }

    const logoff = async ()=>{
        try {
            await AsyncStorage.removeItem('token');
            navigation.goBack();
        } catch (error) {
            
        }
    }

    const getData = async()=>{
        try {
            setToken(await AsyncStorage.getItem('token'));
        } catch (error) {
            console.log(error);
            Toast.show({
                text1: 'Erro',
                text2: 'Token não encontrado',
                type: 'error'
            });
        }
    }

    useEffect(()=>{
        loadingData();
        getData();
    }, [token, isFocused]);

  return(
      <View style={styles.content}>
          <Header>
              <View />
              <Text>Cardápio</Text>
              <Icon
                name='power-settings-new'
                size={24}
                color='#FFF'
                onPress={logoff}
              />
          </Header>
          <View>
            <Spinner />
          </View>
          <FlatList
              data={dados}
              renderItem={({ item }) => <Linha item={item} />}
              keyExtractor={item => String(item.id)}
          />
      </View>
  );
}


export default App;


// leftComponent={{ icon: 'menu', color: '#FFF', size: 30 }}
// centerComponent={{ text: 'CARDÁPIO', style: { color: '#fff' } }}
// rightComponent={{ icon: 'home', color: '#fff' }}
// barStyle={'light-content'}
// backgroundColor={'green'}