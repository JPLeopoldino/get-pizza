import React from 'react';
import { View, Text } from 'react-native';

const Header = (props)=>{
    return(
        <View style={props.style}>
            <Text style={props.style2}>Home</Text>
            <Text style={props.style2}>News</Text>
            <Text style={props.style2}>Contact</Text>
        </View>
    );
}

export default Header;