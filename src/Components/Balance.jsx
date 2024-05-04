import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Balance() {

  const transactions = useSelector((state) => state.traker.Transactions)
  const amounts = transactions.map(transaction => transaction.balance)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='mt-4 mb-3'>
      <h4 className='mb-0 font-bold text-xl'>YOUR BALANCE</h4>
      <h1 className={`font-bold text-4xl mt-0 `}>${total}</h1>
    </div>
  )
}

export default Balance