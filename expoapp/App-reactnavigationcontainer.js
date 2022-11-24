import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Home = props => {
    return <View>
        <Text>Home</Text>
    </View>
}

const App = () => {
    return <View style={styles.container}>
        <NavigationContainer>
            <Home />
        </NavigationContainer>
    </View>
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