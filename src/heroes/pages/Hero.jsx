import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";

export const Hero = () => {

  const { id } = useParams();

  const hero = useMemo( () => getHeroeById(id), [id]); //Dispara la función cada vez que las dependencias cambien
  const navigate = useNavigate();

  if(!hero) {  //Con esta condición se asegura que el heroe exista, y si no, redirige a la pantalla principal

    return <Navigate to="/marvel" />

  }

  const onNavigate = () => {

    navigate(-1);

  }

  return (
    <>

          <div className="overlay">

            <div className="overlay-image animate__animated animate__fadeInLeft">

              <img 
                src={`/heroes/${id}.jpg`} 
                alt={hero.superhero} 
                className="rounded"
              />

            </div>

          </div>

          <div className="text-center mt-2 border mb-3 semi-rounded">

            <h2 className="h2 text-uppercase">{hero.superhero}</h2>
            <hr />
            <p>Alter ego: {hero.alter_ego}</p>
            <p>Publisher: {hero.publisher}</p>
            <p>First appereance: {hero.first_appearance}</p>
            <hr />
            <h3 className="h3 text-uppercase">Characters</h3>
            <hr />
            <p>{hero.characters}</p>

            <button onClick={onNavigate} className="btn btn-primary w-100">Return</button>

          </div>
    
    </>
  )
}

