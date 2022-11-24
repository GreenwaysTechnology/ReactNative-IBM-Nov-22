import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//create Stack Object
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = props => {
    console.log(props.route.name)
    return <Text>Home</Text>
}

const Feed = props => {
    return <View style={styles.container}>
        <Text>Feed Screen</Text>
    </View>
}

const Messages = props => {
    return <View style={styles.container}>
        <Text>Messages Screen</Text>

    </View>
}
const Settings = props => {
    return <View style={styles.container}>
        <Text>Settings Screen</Text>
    </View>
}
function App() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    //console.log(route, focused, color, size)
                    console.log(route)
                    if (route.name==='Feed') {
                        return <Ionicons name="md-checkmark-circle" size={32} color="green" />
                    }
                    //https://ionic.io/ionicons
                    return <Ionicons name="cart-outline" size={32} color="red" />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Messages" component={Messages} />
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