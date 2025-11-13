import { useState } from "react";

function TaskInput(){
    // const [task,setTask] = useState("");
    // const [tasks,setTasks] = useState<string[]>([]);

    // const handleAddTask = () => {
    //     setTasks([...tasks,task]);
    // } 
    // const handleClear = () => {
    //     setTask("")
    // } 

    const [colors,setColors] = useState("black");

    const colorsList = ["black", "red", "blue", "green"];

    const handleChangeColor = () => {
        const i = colorsList.indexOf(colors);
        const next = (i+ 1)
    }

    return(
        <div>
            {/* <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <p>{task}</p>
            <p>Cantidad de letras :{task.length}</p>
            <button onClick={handleAddTask}>Agregar</button>
            <button onClick={handleClear}>Limpiar</button> */}

            <h1 style={{ color: colors}}>Texto a cambiar</h1>
            <button onClick={handleChangeColor} >Cambiar Color</button>
        </div>
        
    )
    
}

export { TaskInput }

