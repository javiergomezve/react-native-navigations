import React from 'react';
import { Button, StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';

const Home = ({ title, bgColor }) => {
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

const Contact = ({ navigation }) => {
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
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const About = ({ navigation }) => {
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
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                backBehavior="history"
                tabBarActiveTintColor="#e91e63"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name={
                                    Platform.OS === 'ios'
                                        ? 'ios-home'
                                        : 'md-home'
                                }
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name={
                                    Platform.OS === 'ios'
                                        ? 'ios-help'
                                        : 'md-help'
                                }
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name={
                                    Platform.OS === 'ios'
                                        ? 'ios-information-circle'
                                        : 'md-information-circle'
                                }
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({});
