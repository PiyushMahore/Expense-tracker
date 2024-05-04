import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

function IncomeExp() {
  const transactions = useSelector((state) => state.traker.Transactions)
  const amounts = transactions.map(transaction => transaction.balance)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='flex justify-between items-center bg-white px-10 py-12 h-20 shadow-md shadow-slate-400'>
      <div className='px-5 mr-4'>
        <h4 className='text-lg font-bold'>INCOME</h4>
        <p className='text-center text-xl py-1.5 text-green-600'>{income}</p>
      </div>
      <div className='border border-gray-300 h-20 mx-4'></div>
      <div className='px-5 ml-4'>
        <h4 className='text-lg font-bold'>EXPENSE</h4>
       <p className='text-center text-xl py-1.5 text-red-600'>{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExp