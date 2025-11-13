import { useState } from "react";

function TaskCounter(){

    const [counter,setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1)
    } 



    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={handleCounter}>Aumentar</button>
        </div>

    )
}

export {TaskCounter};