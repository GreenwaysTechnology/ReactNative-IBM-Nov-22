
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