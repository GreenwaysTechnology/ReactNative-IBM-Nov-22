import { React, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const Counter = props => {
    const [counter, setCounter] = useState(10)

    const onIncrement = () => {
        setCounter(oldCounter => {
            return oldCounter + 1
        })
    }
    return <>
        <Text>Value {counter}</Text>
        <Button title="Increment" onPress={onIncrement} />
    </>
}


//Root Component
const App = () => <View style={styles.container}>
    <Text>Counter App</Text>
    <Counter />
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;