import React, {useContext} from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
  return (
    <div>
      <h6>History</h6>
      <ul id = "list" className='list'>
        {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction}/>))}
        
      </ul>
    </div>
  )
}

export default TransactionList
