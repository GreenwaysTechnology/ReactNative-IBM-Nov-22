import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        async function loadLocation() {

            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                console.log(status)
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                console.log('location', location)
                setLocation(location);
            }
            catch (err) {
                console.log(err)
            }
        }
        loadLocation()

    });

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        console.log(location)
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});