import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreen = props => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}

//create Object By calling createNativeStackNavigator function 
const Stack = createNativeStackNavigator()
console.log(Stack)

const App = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
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