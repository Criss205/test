import { TaskCounter } from "../components/TaskCounter";

function HomePage() {
    return(
        <div>
            <h1>Bienvenido a Taskify</h1>
            <TaskCounter/>
        </div>
    )
}

export { HomePage }