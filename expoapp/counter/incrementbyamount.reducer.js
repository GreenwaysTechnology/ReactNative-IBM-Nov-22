export const IncrementByAmountReducer = (state = { counter: 100 }, action) => {
    //biz 
    switch (action.type) {
        case 'counter/incrementByAmount':
            return { ...state, counter: state.counter + action.value }
        default:
            return state;  // return default state
    }
}