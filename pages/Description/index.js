import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const Description = ({route})=>{

    const sendMessage = ()=>{
        const message = `Olá gostaria de uma pizza de ${item.name}`;
        const url = `whatsapp://send?text=${message}&phone=5516997491972`;
        Linking.openURL(url);
    }

    const navigation = useNavigation();
    const item = route.params;
    return(
        <View>
            <Header>
                <Icon type='font-awesome' name='angle-left' color='#FFF' size={30}
                    onPress={()=>{navigation.goBack()}}
                />
                <Text style={styles.headerTitle}>{item.name}</Text>
            </Header>
            <View style={styles.content}>
                <Image 
                    source={{
                        uri: item.image
                    }}
                    style={styles.img}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Button
                    buttonStyle={styles.button}
                    onPress={sendMessage}
                    title="Enviar Pedido"
                    icon={
                        <Icon type='font-awesome' name='whatsapp' color='#FFF' style={styles.icon} />
                    }
                />
            </View>
        </View>
    );
};

export default Description;