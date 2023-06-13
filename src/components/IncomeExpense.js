import React from 'react'
const IncomeExpense = () => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h6 className='inc'>Income </h6>
        <p id = "money-plus" className='money plus'>+$0.0</p>
     </div>
     <div>
        <h6 className='exp'>Expense</h6>
        <p id = 'money-minus' className='money minus'>-$0.0</p>
      </div>
    </div>
  )
}

export default IncomeExpense
