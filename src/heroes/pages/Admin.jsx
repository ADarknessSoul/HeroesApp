import { useContext } from "react"
import { AuthContext } from "../../auth";
import { Navigate } from "react-router-dom";

export const Admin = () => {

    const { user } = useContext(AuthContext);

        //Aqui va el código Javascript



  return (
    <>

    {

        user.admin ? (

            <>
                   
                {/* Aquí va el código HTML */}
                
                <h1>Hola xd</h1>

            </>

        ) : (

            <Navigate to="/marvel"/>

        )

    }


    </>
  )
}
