import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



//create Stack Object
const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = props => {
    const { navigation, route } = props
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Update the title"
            onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
    </View>
}


const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            <Screen name="Home" component={HomeScreen} options={{ title: 'PostMaster' }} />

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