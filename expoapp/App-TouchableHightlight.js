import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TouchableHighlight, View, Alert } from 'react-native';

function App() {
    return (
        <View style={styles.container}>
            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => Alert.alert('Pressed')}>
                <Button style={{ backgroundColor: '#fff',fontSize:50 }} title="Touch Me"/>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;