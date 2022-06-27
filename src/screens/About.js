import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="About" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>About</Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: '800',
    },
});
