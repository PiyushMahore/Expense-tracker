import {configureStore} from '@reduxjs/toolkit'
import expSlice from './ExpenseSlice'

const ExpStore = configureStore({
    reducer: {
        traker: expSlice
    }
})

export default ExpStore