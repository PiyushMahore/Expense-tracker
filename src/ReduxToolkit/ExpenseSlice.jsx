import {createSlice} from '@reduxjs/toolkit'

const expSlice = createSlice({
    name: "traker",
    initialState: {
        Transactions: []
    },
    reducers: {
        AddExp: (state, action) => {
            state.Transactions.push({
                id: Date.now(),
                transaction: action.payload.transaction,
                balance: Number(action.payload.balance)
            })
        },
        RemoveExp: (state, action) => {
            state.Transactions = state.Transactions.filter((transaction) => transaction.id !== action.payload.id)
        }
    }
})

export const {AddExp, RemoveExp} = expSlice.actions
export default expSlice.reducer