import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item)=> acc+item, 0).toFixed(2);
  return (
    <div>
      <h6>Your Balance</h6>
      <h5 id='balance'> {total}</h5>
    </div>
  )
}

export default Balance
