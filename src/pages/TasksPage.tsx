import { useEffect } from "react"


function TaskPage() {

    // const listaTareas: Task[] = jsonTasks as Task[]


    useEffect( ()=> {

        console.log("iniciando la consulta")

        const fetchResponse = fetch("http://localhost:3000/tasks");

        fetchResponse.then((response) => {
            console.log('recibi la respuesta');
            console.log(response)            
        })

        console.log("ya termine de consultar");
        



    }, [])



    return(
        <div>
            
            <h1>Tareas</h1>
        </div>
    )
}

export { TaskPage }