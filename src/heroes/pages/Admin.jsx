import { useContext, useState } from "react"
import { AuthContext } from "../../auth";
import { Navigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../config/firebase';

export const Admin = () => {

    const { user } = useContext(AuthContext);

    const [createHeroId, setCreateHeroId] = useState("");
    const [createPublisher, setCreatePublisher] = useState("");
    const [createuserNames, setCreateUserNames] = useState("");
    const [createsuperHero, setCreateSuperHero] = useState("");
    const [createFirstAppearance, setCreateFirstAppearance] = useState("");
    const [createAlterEgo, setCreateAlterEgo] = useState("");
    const [createComicName, setCreateComicName] = useState("");
    const [createComicAuthor, setCreateComicAuthor] = useState("");
    const [createComicDate, setCreateComicDate] = useState(0);

    const heroesCollectionRef = collection(db, "heroes");

    const onSubmitHeroe = async( ) => {

        const success = document.getElementById('success');

        try {

            await addDoc(heroesCollectionRef, {
                heroId: createHeroId, 
                publisher: createPublisher,
                character: {

                    alterEgo: createAlterEgo,
                    firstAppearance: createFirstAppearance,
                    superHero: createsuperHero,
                    userNames: createuserNames

                },
                bestComic: {

                    comicName: createComicName,
                    comicAuthor: createComicAuthor,
                    comicDate: createComicDate,

                }
                
            });

            success.classList.remove("d-none");

        } catch(err) {

            console.error(err);
            success.classList.add("d-none");

        }

    }

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
                    <input type="text" className= "form-control" id="autor" name="autor" required onChange={(e) => setCreateComicAuthor(e.target.value)}></input>
                 </div>
         
                
                <div class="col-6">
                    <label for="fecha_lanzamiento" class = "form-label" >Fecha de Lanzamiento:</label>
                    <input type="number"  class="form-control" id="fecha_lanzamiento" name="fecha_lanzamiento" required onChange={(e) => setCreateComicDate(Number(e.target.value))}></input>
                </div>

                <div class="col-6">
                    <label for="titulo" class = "form-label" >Título del Comic:</label>
                    <input type="text" class="form-control" id="titulo" name="titulo" required onChange={(e) => setCreateComicName(e.target.value)}></input>
                </div>

                <div class="col-6">
                    <label for="identidad_secreta" class = "form-label">Identidad Secreta:</label>
                    <input type="text" class="form-control"  id="identidad_secreta" name="identidad_secreta" required onChange={(e) => setCreateAlterEgo(e.target.value)}></input>
                </div>

                <div class="form-outline">
                    <label for="primera_aparicion" class = "form-label">Primera Aparición:</label>
                    <input type="text"  class="form-control" id="primera_aparicion" name="primera_aparicion" required onChange={(e) => setCreateFirstAppearance(e.target.value)}></input>
                </div>

                <div class="form-outline">
                    <label for="nombre_heroe" class = "form-label">Nombre de Héroe:</label>
                    <input type="text" class="form-control"  id="nombre_heroe" name="nombre_heroe" required onChange={(e) => setCreateSuperHero(e.target.value)}></input>
                </div>

                <div class="form-outline">
                    <label for="anteriores_identidades" class = "form-label" >Anteriores Identidades Secretas:</label>
                    <input type="text" class="form-control" id="anteriores_identidades" name="anteriores_identidades" required onChange={(e) => setCreateUserNames(e.target.value)}></input>
                </div>

                <div class="form-outline">
                    <label for="id" class = "form-label" >Id heroe:</label>
                    <input type="text" class="form-control" id="id" name="id" required onChange={(e) => setCreateHeroId(e.target.value)}></input>
                </div>

                <div class="form-outline">
                    <label for="publisher" class = "form-label" >Publisher:</label>
                    <input type="text"  class="form-control"  id="publisher" name="publisher" required onChange={(e) => setCreatePublisher(e.target.value)}></input>
                </div>

                <div class = "modal-footer pt-4">
                <input  type="button" class = " btn btn-dark mx-auto w-50 " onClick={onSubmitHeroe} value="Guardar"></input>
                </div>
                    
            </form>

            <div id="success" className="mt-5 container text-center bg-success p-1 rounded d-none">

                <h2 className="text-white">Usuario creado con éxito</h2>

            </div>

        </div> 
            </>

        ) : (

            <Navigate to="/marvel"/>

        )

    }


    </>
  )
}
