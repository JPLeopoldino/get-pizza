import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Description from './pages/Description';
import Login from './pages/Login';
import Edit from './pages/Edit';
import CreateUser from './pages/CreateUser';

const Stack = createStackNavigator();

const routes = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateUser" component={CreateUser} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Description" component={Description} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;