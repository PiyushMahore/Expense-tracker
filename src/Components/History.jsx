import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveExp } from '../ReduxToolkit/ExpenseSlice'

function History() {
    const Historys = useSelector((state) => state.traker.Transactions)
    const dispatch = useDispatch()

    const RemoveTodo = (id) => {
      dispatch(RemoveExp({id}))
    }

  return (
  <div className='mt-6 transition'>
    <div className='text-lg font-bold'>History</div>
    <hr className='border-solid border-gray-600'></hr>
    {Historys.map((History) => <ul key={History.id} className="list"><li>
      <span> {History.transaction} </span>
      <p className={History.balance > 0 ? `text-green-600` : `text-red-600`}>{History.balance > 0 ? "+" : "-"}${Math.abs(History.balance)}</p>
      <button className="delete-btn" onClick={() => RemoveTodo(History.id)}>X</button>
      </li>
    </ul>)}
  </div>)
}

export default History