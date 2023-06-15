import React, {useContext} from 'react'
import { Pie, PieChart, Cell} from 'recharts';
import { GlobalContext } from '../context/GlobalState';

const Graph = () => {
    const {transactions} = useContext(GlobalContext);
    const data = transactions.map(transactions =>transactions.amount = transactions.amount < 0 ? Math.abs(transactions.amount): transactions.amount)
  return (
    <div>
       <h6>Chart</h6>
       {
        <PieChart width={730} height={250}>
            <Pie data={transactions} dataKey="amount" nameKey="text" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
        </PieChart>}
    </div>
  )
}

export default Graph
