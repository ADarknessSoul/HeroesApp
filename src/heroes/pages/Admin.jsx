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
                   
                   <h2 class= "text-center">Agregar un nuevo comic de superhéroes</h2>
        <div class="text-cente" >

            <form class = "row ">
                    
                 <div class="col-6">
                    <label for="autor" class = "form-label">Autor:</label>
                    <input type="text" className= "form-control" id="autor" name="autor" required></input>
                 </div>
         
                
                <div class="col-6">
                    <label for="fecha_lanzamiento" class = "form-label" >Fecha de Lanzamiento:</label>
                    <input type="number"  class="form-control" id="fecha_lanzamiento" name="fecha_lanzamiento" required></input>
                </div>

                <div class="col-6">
                    <label for="titulo" class = "form-label" >Título del Comic:</label>
                    <input type="text" class="form-control" id="titulo" name="titulo" required></input>
                </div>

                <div class="col-6">
                    <label for="identidad_secreta" class = "form-label" >Identidad Secreta:</label>
                    <input type="text" class="form-control"  id="identidad_secreta" name="identidad_secreta" required></input>
                </div>

                <div class="form-outline">
                    <label for="primera_aparicion" class = "form-label">Primera Aparición:</label>
                    <input type="text"  class="form-control" id="primera_aparicion" name="primera_aparicion" required></input>
                </div>

                <div class="form-outline">
                    <label for="nombre_heroe" class = "form-label">Nombre de Héroe:</label>
                    <input type="text" class="form-control"  id="nombre_heroe" name="nombre_heroe" required></input>
                </div>

                <div class="form-outline">
                    <label for="anteriores_identidades" class = "form-label" >Anteriores Identidades Secretas:</label>
                    <input type="text" class="form-control" id="anteriores_identidades" name="anteriores_identidades" required></input>
                </div>

                <div class="form-outline">
                    <label for="id" class = "form-label" >Id heroe:</label>
                    <input type="text" class="form-control" id="id" name="id" required></input>
                </div>

                <div class="form-outline">
                    <label for="publisher" class = "form-label" >Publisher:</label>
                    <input type="text"  class="form-control"  id="publisher" name="publisher" required></input>
                </div>

                <div class = "modal-footer pt-4">
                <input  type="button" class = " btn btn-dark mx-auto w-50 " value="Guardar"></input>
                </div>
                    
                

            </form>

        </div> 
            </>

        ) : (

            <Navigate to="/marvel"/>

        )

    }


    </>
  )
}
