import React from "react";
import CurrentWeather from '../screens/currentWeather';
import UpcomingWeather from '../screens/upcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator() //initializing the tab navigator

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name={'Current'}
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={24}
                            color={focused ? 'tomato' : 'black'} />
                    )
                }}
            />
            <Tab.Screen
                name={'Upcoming'}
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={24}
                            color={focused ? 'tomato' : 'black'} />
                    )
                }}
            />
            <Tab.Screen
                name={'City'}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={24}
                            color={focused ? 'tomato' : 'black'} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;