import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeScreen = props => {
    console.log('home', props)
    const { navigation } = props;
    const moveToScreen = () => {
        // props.navigation.navigate('Details')
        navigation.navigate('Details')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go Details" onPress={moveToScreen} />
    </View>
}

export const DetailsScreen = props => {
    console.log('home', props)
    const { navigation } = props;
    const moveToScreen = () => {
        // props.navigation.navigate('Details')
        navigation.navigate('Greeter')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Greeter" onPress={moveToScreen} />
    </View>
}

const GreeterScreen = props => <Text>Greeter</Text>
//create Object By calling createNativeStackNavigator function 
const Stack = createNativeStackNavigator()
console.log(Stack)

const App = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Greeter" component={GreeterScreen} />

        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default App;