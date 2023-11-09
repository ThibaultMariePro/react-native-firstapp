import React from "react";
import CurrentWeather from '../screens/currentWeather';
import UpcomingWeather from '../screens/upcomingWeather';
import City from '../screens/city';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator() //initializing the tab navigator

const Tabs = ({ weather }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'lightblue',
                },
                headerStyle: {
                    backgroundColor: 'lightblue',
                },
                headerTitleStyle: {
                    color: 'tomato',
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            }}
        >
            <Tab.Screen
                name={'Current'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={24}
                            color={focused ? 'tomato' : 'black'} />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            
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