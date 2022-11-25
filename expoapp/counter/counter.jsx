import { useSelector, useDispatch } from 'react-redux'
import { CounterDisplay } from './counterdisplay'

export const Counter = props => {
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
        <CounterDisplay
            incrementByAmtValue={incrementByAmtValue}
            incrementedValue={incrementedValue}
            decrementedValue={decrementedValue}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />

    </>
}