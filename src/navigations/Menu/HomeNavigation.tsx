
import React from 'react'
import {
    createStackNavigator,
    StackNavigationOptions
} from '@react-navigation/stack'
import { ROUTER_KEY } from '../route'
import HomeScreen from '../../screens/homes/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTER_KEY.home}>
            <Stack.Screen 
                name={ROUTER_KEY.home}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation;