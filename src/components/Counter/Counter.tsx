import React from 'react'

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [amount, setAmount] = React.useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <input type="number" 
         name='amount'
         value={amount}
         onChange={(e)=> setAmount(Number(e.target.value))}
        />
        <button onClick={()=> setCount(amount)}>Add Amount</button>
        </div>
  )
}


//dla type number jest spinbutton
//dla type text jest textbox
//dla button jest button
