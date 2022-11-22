import { React, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//stateFull component: Parent
export const Counter = props => {
    const [counter, setCounter] = useState(15)
    const onIncrement = () => {
        setCounter(oldCounter => {
            return oldCounter + 1
        })
    }
    return <>
        {/* dynamic props :state as prop , function as prop */}
        <CounterDisplay counter={counter} onIncrement={onIncrement} />
    </>
}

//stateLess compoent: only receives props 
export const CounterDisplay = props => {
    const { counter, onIncrement } = props
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