import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Home = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#03cafc',
            }}
        >
            <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>
                Home
            </Text>
        </View>
    );
};

const Contact = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#c203fc',
            }}
        >
            <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>
                Contact
            </Text>
        </View>
    );
};

const About = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#48d969',
            }}
        >
            <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>
                About
            </Text>
        </View>
    );
};

const Tab = createMaterialTopTabNavigator();

const TopBar = () => {
    const insets = useSafeAreaInsets();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: {
                        backgroundColor: 'white',
                        marginTop: insets.top,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarLabel: 'Home' }}
                />
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{ tabBarLabel: 'Contact' }}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{ tabBarLabel: 'About' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TopBar;
