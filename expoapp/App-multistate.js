import { React, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export const Counter = () => {
    const [value, setValue] = useState(200)
    const [like, setLike] = useState(100)
    const [counter, setCounter] = useState({ value: 10 })

    const onIncrement = () => {
        setValue(previousValue => {
            return previousValue + 1
        })
    }
    const onLike = () => {
        setLike(previousValue => {
            return previousValue + 1
        })
    }
    //object mutation
    const onCounter = () => {
        setCounter(oldState => {
            return { ...oldState, value: oldState.value + 1 }
        })
    }

    return <View>
        <Text>Counter Value {value} Like {like}</Text>
        <Text>Counter Object {counter.value}</Text>

        <Button
            onPress={onIncrement}
            title="Increment"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <View style={{ marginTop: 10 }}>
            <Button
                onPress={onLike}
                title="Like"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <View style={{ marginTop: 10 }}>
            <Button
                onPress={onCounter}
                title="Counter Object"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    </View>

}

//Root Component
const App = () => <View style={styles.container}>
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