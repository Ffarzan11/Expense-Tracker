import React, { useState } from 'react'
import '../App.css';
const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  return (
    <div>
        <h6>Add new transaction</h6>
      <form >
        <div className="form-control">
          <label htmlFor="text"><h6 className='text'>Text</h6></label>
          <input type="text" value={text} onChange = {(e)=>  setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <br/>
        <div className="form-control">
          <label htmlFor="amount"
            ><h6>Amount</h6>
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange = {(e)=>  setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  ) 
}

export default AddTransaction
