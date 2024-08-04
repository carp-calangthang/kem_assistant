import 'react-native-gesture-handler'
import React from 'react'
import {
    DefaultTheme,
    NavigationContainer,
    NavigationState
} from '@react-navigation/native'

import { Appearance, StatusBar } from 'react-native'
import { MidnightColor } from '../constant/colors'
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './Menu/HomeNavigation'

function screenTracking(state: NavigationState | undefined): void {
    if (state) {
        const route = state?.routes[state.index]
        if (route.state) {
            return screenTracking(route?.state as any)
        }
        return console.log(`NAVIGATING > ${route?.name}`)
    }
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: MidnightColor
    }
}

const MainNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeNavigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;