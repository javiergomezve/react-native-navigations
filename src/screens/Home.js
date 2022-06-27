import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Home" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>Home</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03cafc',
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: '800',
    },
});
