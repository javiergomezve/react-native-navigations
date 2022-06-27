import React from 'react';
import { Text, View, Animated, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) => {
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

            <Button
                title="Go to contact"
                onPress={() => navigation.navigate('Contact')}
            />
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
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
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
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: 'green',
                        },
                    }}
                />
                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{ headerStyleInterpolator: forFade }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ headerStyleInterpolator: forFade }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
