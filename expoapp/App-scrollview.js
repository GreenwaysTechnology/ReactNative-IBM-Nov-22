import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Greeter } from './greeter/greeter';


export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
                <Greeter title="Welcome to React Native!!" />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
