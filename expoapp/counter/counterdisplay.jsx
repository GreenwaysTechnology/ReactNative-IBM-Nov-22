import { Text, Button } from 'react-native'

export const CounterDisplay = props => {
    const { incrementedValue, decrementedValue, incrementByAmtValue, onIncrement, onDecrement } = props
    return <>
        <Text>Incrementer {incrementedValue} Decrementer : {decrementedValue} Input With Counter {incrementByAmtValue}</Text>
        <Button title="Increment" onPress={onIncrement} />
        <Button title="Decrement" onPress={onDecrement} />
        <Button title="IncrementByAmount" onPress={() => {
            dispatch({ type: 'counter/incrementByAmount', value: 2 })
        }} />

    </>
}