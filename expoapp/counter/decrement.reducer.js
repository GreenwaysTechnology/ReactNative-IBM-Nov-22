
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
