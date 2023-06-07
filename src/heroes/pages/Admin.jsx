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
                <input type="text" id="autor" name="autor" required onChange={(e) => setCreateComicAuthor(e.target.value)}></input>

                <label for="fecha_lanzamiento">Fecha de Lanzamiento:</label>
                <input type="number" id="fecha_lanzamiento" name="fecha_lanzamiento" required onChange={(e) => setCreateComicDate(Number(e.target.value))}></input>

                <label for="titulo">Título del Comic:</label>
                <input type="text" id="titulo" name="titulo" required onChange={(e) => setCreateComicName(e.target.value)}></input>

                <label for="identidad_secreta">Identidad Secreta:</label>
                <input type="text" id="identidad_secreta" name="identidad_secreta" required onChange={(e) => setCreateAlterEgo(e.target.value)}></input>

                <label for="primera_aparicion">Primera Aparición:</label>
                <input type="text" id="primera_aparicion" name="primera_aparicion" required onChange={(e) => setCreateFirstAppearance(e.target.value)}></input>

                <label for="nombre_heroe">Nombre de Héroe:</label>
                <input type="text" id="nombre_heroe" name="nombre_heroe" required onChange={(e) => setCreateSuperHero(e.target.value)}></input>

                <label for="anteriores_identidades">Anteriores Identidades Secretas:</label>
                <input type="text" id="anteriores_identidades" name="anteriores_identidades" required onChange={(e) => setCreateUserNames(e.target.value)}></input>

                <label for="id">Id heroe:</label>
                <input type="text" id="id" name="id" required onChange={(e) => setCreateHeroId(e.target.value)}></input>

                <label for="publisher">Publisher:</label>
                <input type="text" id="publisher" name="publisher" required onChange={(e) => setCreatePublisher(e.target.value)}></input>

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
