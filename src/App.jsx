import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExp from './Components/IncomeExp'
import History from './Components/History'
import AddNew from './Components/AddNew'
import Form from './Components/Form'

function App() {

  return (
    <div className='min-h-screen min-w-full flex justify-center m-0 bg-gray-100'>
    <div className='flex justify-evenly flex-col'>
    <Header />
    <Balance />
    <IncomeExp />
    <History />
    <AddNew />
    <Form />
    </div>
    </div>
  )
}

export default App
