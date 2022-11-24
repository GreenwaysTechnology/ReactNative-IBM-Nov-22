
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, FlatList, StatusBar, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';



//create Stack Object
const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = props => {
    const { navigation, route } = props;
    return <View style={styles.container}>
        <Text>Home Screen : {props.extraData}</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details', { id: 1, item: 'React Native' })} />
    </View>
}
const DetailsScreen = (props) => {
    const { navigation, route } = props;
    console.log(route.params);
    return (
        <View style={styles.container}>
            <Text>Details Screen : {route.params.id} - {route.params.item}</Text>
            <Button
                title="Update Params"
                onPress={() => {
                    // navigation.push('Details', {
                    //     id: Math.floor(Math.random() * 100),
                    // })
                    navigation.setParams({ id: 900, item: 'foo' })
                }
                }
            />
        </View>
    );
}

const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            <Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Start Token' }} />
            <Screen name="Details" component={DetailsScreen} />
        </Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default App;