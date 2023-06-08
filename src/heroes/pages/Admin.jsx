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
                   
        <h2 class= "text-center formulario_title ">Agregar un nuevo comic de superhéroes</h2>
        <div class="text-center formulario_container" >

            <form class = "formulario ">

                <div class="formulario_group">
                            <h4 class="formulario_title formulario_labelA" > Best Comic </h4>
                </div>

                 <div class="formulario_group">
                    <label for="autor" class = "formulario_label">Autor:</label>
                    <input type="text" className= "formulario_input" id="autor" name="autor" required onChange={(e) => setCreateComicAuthor(e.target.value)}></input>
                 </div>
         
                
                <div class="formulario_group">
                    <label for="fecha_lanzamiento" class = "formulario_labelA" >Fecha de Lanzamiento:</label>
                    <input type="number"  class="formulario_input" id="fecha_lanzamiento" name="fecha_lanzamiento" required onChange={(e) => setCreateComicDate(Number(e.target.value))}></input>
                </div>

                <div class="formulario_group">
                    <label for="titulo" class = "formulario_labelA" >Título del Comic:</label>
                    <input type="text" class="formulario_input" id="titulo" name="titulo" required onChange={(e) => setCreateComicName(e.target.value)}></input>
                </div>

                  
              
              <div class="formulario_group">
                        <h4 class="text-center mt-5" > Data of heroes </h4>
              </div>

                <div class="formulario_group">
                   
                    <label for="identidad_secreta" class = "formulario_labelA">Identidad Secreta:</label>
                    <input type="text" class="formulario_input"  id="identidad_secreta" name="identidad_secreta" required onChange={(e) => setCreateAlterEgo(e.target.value)}></input>
                </div>

                <div class="formulario_group">
                    <label for="primera_aparicion" class = "formulario_labelA">Primera Aparición:</label>
                    <input type="text"  class="formulario_input" id="primera_aparicion" name="primera_aparicion" required onChange={(e) => setCreateFirstAppearance(e.target.value)}></input>
                </div>

                <div class="formulario_group">
                    <label for="nombre_heroe" class = "formulario_labelA">Nombre de Héroe:</label>
                    <input type="text" class="formulario_input"  id="nombre_heroe" name="nombre_heroe" required onChange={(e) => setCreateSuperHero(e.target.value)}></input>
                </div>

                <div class="formulario_group">
                    <label for="anteriores_identidades" class = "formulario_labelA" >Anteriores Identidades Secretas:</label>
                    <input type="text" class="formulario_input" id="anteriores_identidades" name="anteriores_identidades" required onChange={(e) => setCreateUserNames(e.target.value)}></input>
                </div>

                <div class="formulario_group">
                    <label for="id" class = "formulario_labelA" >Id heroe:</label>
                    <input type="text" class="formulario_input" id="id" name="id" required onChange={(e) => setCreateHeroId(e.target.value)}></input>
                </div>

                <div class="formulario_group">
                    <label for="publisher" class = "formulario_labelA" >Publisher:</label>
                    <input type="text"  class="formulario_input"  id="publisher" name="publisher" required onChange={(e) => setCreatePublisher(e.target.value)}></input>
                </div>

                <div class = "modal-footer pt-4">
                     <input  type="button" class = " formulario-submit mx-auto w-50 " onClick={onSubmitHeroe} value="Guardar"></input>
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
