import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);

    function addNumber(){
        setCount(count+1);
    }

    function substactNumber(){
        if (count === 0) {
            alert("Nilai tidak boleh negatif!");
         } else{
                setCount(count-1);
            }
    }
    
    function resetNumber(){
        setCount(0);
    }
    
    return (
        
        <div>
            <p> Count : {count}</p>
            <button onClick={addNumber}>+</button>
            <button onClick={substactNumber}>-</button>
            <button onClick={resetNumber}>Reset</button>
        </div>
         
     
    )
}

export default Count

