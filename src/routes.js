import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackContainer} from '@react-navigation/stack';

const AppStack = createStackContainer();

import Home from './pages/Home'

export default function Route(){
    return(
        <NavigationContainer>
            <AppStack.Navigation screenOptions={{ headerShown: false}}>
                <AppStack.Screen  name="Home" component={Home} />
            </AppStack.Navigation>
        </NavigationContainer>
    )
}