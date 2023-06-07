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
                   
                   <h2>Agregar un nuevo comic de superhéroes</h2>
            <form>

                <label for="autor">Autor:</label>
                <input type="text" id="autor" name="autor" required></input>

                <label for="fecha_lanzamiento">Fecha de Lanzamiento:</label>
                <input type="number" id="fecha_lanzamiento" name="fecha_lanzamiento" required></input>

                <label for="titulo">Título del Comic:</label>
                <input type="text" id="titulo" name="titulo" required></input>

                <label for="identidad_secreta">Identidad Secreta:</label>
                <input type="text" id="identidad_secreta" name="identidad_secreta" required></input>

                <label for="primera_aparicion">Primera Aparición:</label>
                <input type="text" id="primera_aparicion" name="primera_aparicion" required></input>

                <label for="nombre_heroe">Nombre de Héroe:</label>
                <input type="text" id="nombre_heroe" name="nombre_heroe" required></input>

                <label for="anteriores_identidades">Anteriores Identidades Secretas:</label>
                <input type="text" id="anteriores_identidades" name="anteriores_identidades" required></input>

                <label for="id">Id heroe:</label>
                <input type="text" id="id" name="id" required></input>

                <label for="publisher">Publisher:</label>
                <input type="text" id="publisher" name="publisher" required></input>

                <input type="button" value="Guardar"></input>
            </form>
            </>

        ) : (

            <Navigate to="/marvel"/>

        )

    }


    </>
  )
}
