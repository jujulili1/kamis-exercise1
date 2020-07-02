import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);
    if (count < 0) {
        alert("Nilai tidak boleh negatif!");
    }
    return (
        <>
        <div>
            <p> Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
         
     </>
    )
}

export default Count

