import { useContext } from "react"
import { AuthContext } from "../../auth";
import { Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../config/firebase';

export const Admin = () => {

    const { user } = useContext(AuthContext);

    // const heroesCollectionRef = collection(db, "heroes");

    // const onSubmitHeroe = async( ) => {

    //     try {

    //         await addDoc(heroesCollectionRef, {
    //             heroId: , 
    //             publisher: , 
    //             
    //         });

    //     } catch(err) {

    //         console.error(err);

    //     }

    // }

        //Aqui va el código Javascript



  return (
    <>

    {

        user.admin ? (

            <>
                   
                {/* Aquí va el código HTML */}

                <h1 className="text-center">Hola xd</h1>

            </>

        ) : (

            <Navigate to="/marvel"/>

        )

    }


    </>
  )
}
