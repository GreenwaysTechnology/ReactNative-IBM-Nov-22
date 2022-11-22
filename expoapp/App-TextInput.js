import { React, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

const UserInput = () => {
    //state variable to capture user intput
    const [text, setText] = useState('Greet')
    // const update = name => {
    //     setText(name)
    // }
    return <View>
        <Text style={styles.label}>Enter Your Name</Text>
        {/* inline listener */}
        <TextInput multiline={true} style={styles.input} autoFocus={true} defaultValue={'default'} onChangeText={name => {
            setText(name)
        }} />
        <Text style={styles.label}>Enter Your Password</Text>
        {/* inline listener */}
        <TextInput style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
        />
        <Text style={styles.label}>Your Name is : {text}</Text>
        {/* Inline listner */}
        <Button title='Show Name' onPress={() => {
            Alert.alert(text)
        }} />
    </View>
}

//Root Component
const App = () => <View style={styles.container}>
    <UserInput />
</View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 25,
        color: 'red'
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink'
    }
});
export default App;