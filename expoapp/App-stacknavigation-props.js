import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
//as called alise name : ES6 concept
import { Todos as TodoScreen } from './todos/todos.screen'

export const HomeScreen = ({ navigation, title }) => <View style={styles.container}>
    <Text>{title}</Text>
    <Button title="Todos" onPress={() => {
        navigation.navigate('Todos')
    }} />
</View>


export const DetailsScreen = props => {
    console.log('home', props)
    const { navigation } = props;
    const moveToScreen = () => {
        navigation.navigate('Greeter')
    }
    return <View style={styles.container}>
        <Text>Details Screen</Text>
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
            {/* <Home title="Todo Home" /> */}
            <Stack.Screen name="Home" options={{ title: 'Home Screen' }}>
                {props => {
                    return <HomeScreen {...props} title="Todos App - Home" />
                }}
            </Stack.Screen>
            <Stack.Screen name="Todos" options={{ title: 'Todos App Screen' }} component={TodoScreen} />
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