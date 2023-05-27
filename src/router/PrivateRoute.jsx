import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

    //Se extra la ruta actual tomando el pathname y la busqueda
    const { pathname, search } = useLocation();

    //Con ambos valores se genera el string de la ruta
    const lastPath = pathname + search; 

    //Se guarda en localStorage para volver a acceder a la misma página una vez loggeado
    localStorage.setItem('lastPath', JSON.stringify(lastPath));

  return (logged)
    ? children
    : <Navigate to="/login"/>
}
