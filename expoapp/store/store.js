import { configureStore } from '@reduxjs/toolkit'
import { IncrementReducer } from '../counter/increment.reducer'
import { DecrementReducer } from '../counter/decrement.reducer'
import { IncrementByAmountReducer } from '../counter/incrementbyamount.reducer'

//store.js 
//store Object 
export const store = configureStore({
    reducer: { IncrementReducer, DecrementReducer, IncrementByAmountReducer }
})