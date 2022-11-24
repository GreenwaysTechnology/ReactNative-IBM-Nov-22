import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

//create Object By calling createNativeStackNavigator function 
const { Navigator, Screen } = createNativeStackNavigator()

export const HomeScreen = props => {
    const { navigation } = props;
    const moveToScreen = () => {
        navigation.navigate('Details', { message: 'Hello' })
    }
    return <View style={styles.container}>
        <Text>{props.title}</Text>
        <Button title="Go Details" onPress={moveToScreen} />
    </View>
}
HomeScreen.defaultProps = {
    title: 'Your Bank'
}

export const DetailsScreen = props => {

    //props.route.params
    const { navigation, route: { params: { message } } } = props;
    // console.log(route)

    return <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>Data From Home Screen {message}</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Details')}
        />
        <Button title="Go Back" onPress={() => {
            navigation.goBack();
        }} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

    </View>
}

const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            <Screen name="Home" options={{ title: 'Welcome to Start Token' }}>
                {props => {
                    return <HomeScreen {...props} title="Bank of India - Home" />
                }}
            </Screen>

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
    }
});
export default App;