import React from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';

const Content = props => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.drawerHeader}>
                <View>
                    <Text style={styles.drawerHeaderText}>Drawer content</Text>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    icon={() => (
                        <Icon
                            name={
                                Platform.OS === 'ios' ? 'ios-close' : 'md-close'
                            }
                            color="black"
                            size={22}
                        />
                    )}
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
        </ScrollView>
    );
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            backBehavior="history"
            drawerContent={props => <Content {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
}

const DrawerWrapper = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
};

export default DrawerWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#03cafc',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
