import { NavLink } from "react-router-dom";

function Header(){
    return(

        <>
            <div>
                <NavLink to={"/"}> Inicio </NavLink>
                <NavLink to={"/about-me"}>Acerca de Mi</NavLink>
                <NavLink to={"/tasks"}>Mis tareas</NavLink>
            </div>      
        </>

        
    )
}

export {Header}