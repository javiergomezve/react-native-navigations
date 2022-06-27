import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Contact = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} title="Contact" />
            <View style={styles.content}>
                <Text style={styles.text}>Contact</Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c203fc',
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: '800',
    },
});
