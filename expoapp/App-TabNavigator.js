import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//create Stack Object
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = props => {
    return <View style={styles.container}>
            <Text>Home</Text>
    </View>
}

const Settings = props => {
    return <View style={styles.container}>
        <Text>Settings Screen</Text>
    </View>
}
function App() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={Settings} />       
        </Tab.Navigator>
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

export default App
