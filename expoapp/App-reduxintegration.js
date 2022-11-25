import { React, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'

////////////////////////////////////////////////////////////////////////////////////
//StateManagement 

//Reducer: it is function pure function ; having biz logic 
//state is just variable holding inital state of app
//action is just variable holdig object(request payload)
//action  = {type:'counter/increment'}

export const IncrementReducer = (state = { counter: 100 }, action) => {
    //biz 
    switch (action.type) {
        case 'counter/increment':
            //return immutable object 
            return { ...state, counter: state.counter + 1 }
        default:
            return state;  // return default state
    }
}

//read parameter from the user interface
export const IncrementByAmountReducer = (state = { counter: 100 }, action) => {
    //biz 
    switch (action.type) {
        case 'counter/incrementByAmount':
            //return immutable object 
            return { ...state, counter: state.counter + action.value }
        default:
            return state;  // return default state
    }
}

export const DecrementReducer = (state = { counter: 100 }, action) => {
    //biz 
    switch (action.type) {
        case 'counter/decrement':
            //return immutable object 
            return { ...state, counter: state.counter - 1 }
        default:
            return state;  // return default state
    }
}

//store.js 
//store Object 
export const store = configureStore({
    reducer: { IncrementReducer, DecrementReducer, IncrementByAmountReducer }
})

////////////////////////////////////////////////////////////////////////////////////
//UI code : will not have any biz logic
export const Counter = props => {
    //how to grab redux state into react component
    const incrementedValue = useSelector(state => {
        console.log(state)
        return state.IncrementReducer.counter
    })
    const decrementedValue = useSelector(state => {
        console.log(state)
        return state.DecrementReducer.counter
    })
    const incrementByAmtValue = useSelector(state => {
        return state.IncrementByAmountReducer.counter
    })

    ///
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send request to redux to increment counter 
        dispatch({ type: 'counter/increment' })
    }
    const onDecrement = () => {
        //send request to redux to increment counter 
        dispatch({ type: 'counter/decrement' })
    }

    return <>
        <Text>Incrementer {incrementedValue} Decrementer : {decrementedValue} Input With Counter {incrementByAmtValue}</Text>
        <Button title="Increment" onPress={onIncrement} />
        <Button title="Decrement" onPress={onDecrement} />
        <Button title="IncrementByAmount" onPress={() => {
            dispatch({ type: 'counter/incrementByAmount' , value:2})
        }} />

    </>
}

const Root = () => <Provider store={store}>
    <Counter />
</Provider>
//Root Component
const App = () => <View style={styles.container}>
    <Root />
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