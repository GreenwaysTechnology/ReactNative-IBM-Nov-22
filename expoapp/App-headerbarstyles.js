import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
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
function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home' screenOptions={
            {
                headerStyle: {
                    backgroundColor: 'pink'
                }
            }
        }>
            <Screen name="Home" component={HomeScreen} options={
                { title: 'Home', headerStyle: { backgroundColor: '#f4511e', headerTintColor: '#fff' } }} />
            <Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Screen' }}
            />

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