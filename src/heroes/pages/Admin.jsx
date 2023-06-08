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
    const [selectedImage, setSelectedImage] = useState(null);


    const heroesCollectionRef = collection(db, "heroes");

    const onSubmitHeroe = async() => {

        // const success = document.getElementById('success');

        const finalPublisher = `${createPublisher} Comics`;
        const finalHeroId = `${createPublisher.toLowerCase()}-${createsuperHero.toLowerCase().trim()}`;

        //Codigo para subir la imagen a un servidor de node y guardarlo en una carpeta (no funciona)
        // const newFileName = `${finalHeroId.toLowerCase().trim()}.jpg`;

        // const modifiedImage = new File([selectedImage], newFileName, {
        //   type: selectedImage.type,
        //   lastModified: selectedImage.lastModified,
        // });

        // const formData = new FormData();
        // formData.append('image', modifiedImage);

        // console.log(modifiedImage);

        // fetch('http://localhost:3000/upload', {
        //     method: 'POST',
        //     headers: {
        //         // Set the Content-Type header explicitly
        //         'Content-Type': 'multipart/form-data',
        //       },
        //     body: formData,
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //       console.log(data); // Response from the server
        //     })
        //     .catch((error) => {
        //       console.error('Error uploading image:', error);
        //     });


        try {

            await addDoc(heroesCollectionRef, {
                heroId: finalHeroId, 
                publisher: finalPublisher,
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


        const handleImageUpload = (event) => {
            setSelectedImage(event.target.files[0]);
          };

  return (
    <>

    {

        user.admin ? (

            <>
                   
        <h2 className= "text-center formulario_title ">Add a comic</h2>
        <div className="text-center formulario_container" >

            <form className= "formulario ">

            
            <div className="formulario_group">
                <h4 className="formulario_title formulario_labelA" > Publisher </h4>
            </div>

            <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="publishers" id="Marvel" onChange={(e) => setCreatePublisher(e.target.id)}/>
                <label className="form-check-label text-black" htmlFor="MarvelRadio">
                    Marvel
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="publishers" id="DC" onChange={(e) => setCreatePublisher(e.target.id)}/>
                <label className="form-check-label text-black" htmlFor="DCRadio">
                    DC
                </label>
            </div>              
              
              <div className="formulario_group">
                        <h4 className="text-center mt-5" > Data of heroes </h4>
              </div>

                <div className="formulario_group">
                   
                    <label htmlFor="identidad_secreta" className="formulario_labelA">Identidad Secreta:</label>
                    <input type="text" className="formulario_input"  id="identidad_secreta" name="identidad_secreta" required onChange={(e) => setCreateAlterEgo(e.target.value)}></input>
                </div>

                <div className="formulario_group">
                    <label htmlFor="primera_aparicion" className="formulario_labelA">Primera Aparición:</label>
                    <input type="text"  className="formulario_input" id="primera_aparicion" name="primera_aparicion" required onChange={(e) => setCreateFirstAppearance(e.target.value)}></input>
                </div>

                <div className="formulario_group">
                    <label htmlFor="nombre_heroe" className="formulario_labelA">Nombre de Héroe:</label>
                    <input type="text" className="formulario_input"  id="nombre_heroe" name="nombre_heroe" required onChange={(e) => setCreateSuperHero(e.target.value)}></input>
                </div>

                <div className="formulario_group">
                    <label htmlFor="anteriores_identidades" className="formulario_labelA" >Anteriores Identidades Secretas:</label>
                    <input type="text" className="formulario_input" id="anteriores_identidades" name="anteriores_identidades" required onChange={(e) => setCreateUserNames(e.target.value)}></input>
                </div>

                <div className="formulario_group">
                            <h4 className="formulario_title formulario_labelA" > Best Comic </h4>
                </div>

                 <div className="formulario_group">
                    <label htmlFor="autor" className="formulario_label">Autor:</label>
                    <input type="text" className= "formulario_input" id="autor" name="autor" required onChange={(e) => setCreateComicAuthor(e.target.value)}></input>
                 </div>
         
                
                <div className="formulario_group">
                    <label htmlFor="fecha_lanzamiento" className="formulario_labelA" >Fecha de Lanzamiento:</label>
                    <input type="number"  className="formulario_input" id="fecha_lanzamiento" name="fecha_lanzamiento" required onChange={(e) => setCreateComicDate(Number(e.target.value))}></input>
                </div>

                <div className="formulario_group">
                    <label htmlFor="titulo" className = "formulario_labelA" >Título del Comic:</label>
                    <input type="text" className="formulario_input" id="titulo" name="titulo" required onChange={(e) => setCreateComicName(e.target.value)}></input>
                </div>

                {/* <div className="formulario_group">
                    <label htmlFor="imagenHero" className = "formulario_labelA" >Imagen del comic:</label>
                    <input type="file" accept=".jpg" className="form-control mt-3" id="imagenHero" name="imagenHero" required onChange={handleImageUpload}></input>
                </div> */}

                <div className="modal-footer pt-4">
                     <input  type="button" className = "formulario-submit mx-auto w-50" value="Guardar" onClick={onSubmitHeroe}></input>
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
