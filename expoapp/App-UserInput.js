import { React, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

export const UserInput = props => {
    //declare state to capture input values
    const [text, setText] = useState('defaultValue')
    //listener method takes arg called event object 
    //event object is bridge object 
    const onUpdate = name  => {
        //read Text Box value and update text 
        setText(name)
    }
    const onGetValue = () => {
        Alert.alert(text)
        setText('')
    }
    return <View>
        <Text style={styles.label}>Enter Your Name</Text>
        {/* TextInput */}
        <TextInput style={styles.input} onChangeText={onUpdate} value={text} />
        <Button title="GetText" onPress={onGetValue} />
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
        borderWidth: 3,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink'
    }
});
export default App;