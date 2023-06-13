import React from 'react'
import { Pie, PieChart, Cell} from 'recharts';


const Graph = () => {
   const data = [
        {
            "name": "income",
            "value": 1000
        },
        {
            "name": "expense",
            "value": 450
        }
       
    ]
    const colors = ["#C1E1C1", "#FAA0A0"]
  return (
    <div>
       <h6>Chart</h6>
       <PieChart width={800} height={250}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={100} label>
                {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))
                }
            </Pie>
        </PieChart>
    </div>
  )
}

export default Graph
