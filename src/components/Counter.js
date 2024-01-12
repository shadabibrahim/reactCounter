import React, { useState } from "react";

const Counter =()=>{
    const [count ,setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => count<=9?setCount(count + 1): ""}>Increment</button>
            <button onClick={()=>count>=2?setCount(count-1):""}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;