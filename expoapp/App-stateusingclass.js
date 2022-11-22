import { React, Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export class Counter extends Component {
    state = {
        counter: 0
    }
    onIncrement = () => {
        this.setState(prvState => {
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }
    render() {
        return <>
            <Text>Value {this.state.counter}</Text>
            <Button title="Increment" onPress={this.onIncrement} />
        </>
    }
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