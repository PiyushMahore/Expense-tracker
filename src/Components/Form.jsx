import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddExp } from '../ReduxToolkit/ExpenseSlice'

function Form() {
    const dispatch = useDispatch()
    const [todomsg, setTodomsg] = useState("")
    const [amount, setAmount] = useState("")
    
    const addhistory = () => {
        dispatch(AddExp({transaction : todomsg, balance: amount}))
        setAmount("")
        setTodomsg("")
    }
    
  return (
    <div>
        <div className='flex flex-col'>
            <label htmlFor='Type'>Text</label>
            <input value={todomsg} placeholder='Enter Text...' className='p-2.5 mb-2 mt-2' id='Type' type='text' onChange={(e) => setTodomsg(e.target.value)}/>
            <label htmlFor='Amount'>Amount <br></br>(negative - expense, positive - income)</label>
            <input value={amount} className='p-2.5 mt-2' id='Amount' placeholder='0' type='number' onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={addhistory} className='text-center p-2.5 mt-2.5 mb-2 bg-purple-400 transition duration-300 ease-in-out hover:bg-purple-700 text-base border-0 block text-white'>Add Transaction</button>
        </div>
    </div>
  )
}

export default Form