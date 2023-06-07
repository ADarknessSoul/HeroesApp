import { Link } from "react-router-dom";
import './HeroCard.css';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useContext } from "react";
import { AuthContext } from "../../auth";

export const HeroCard = ({Hero, withoutButton = false}) => {

  const heroURL=`/heroes/${Hero.heroId}.jpg`;

  const { user } = useContext(AuthContext);

  const { userNames, superHero, firstAppearance, alterEgo } = Hero.character;

  const deleteMovie = async() => {

    const heroeDoc = doc(db, "heroes", Hero.id);
    await deleteDoc(heroeDoc);

  }

  return (

    <>

    <div>

      <Link to={`../hero/${Hero.heroId}`} >

        <div className="my-card animate__animated animate__fadeIn m-0">

          <img src={heroURL} className="img img-responsive" alt={superHero}/>

          <div className="profile-name">{superHero}</div>

          <div className="profile-position">{alterEgo}</div>

              <div className="profile-overview">

                <div className="row">

                    <div className="col-ms-4">

                      <h3>{Hero.publisher}</h3>

                      <p>Primera aparición: <br />{firstAppearance}</p>
                      {
                          (alterEgo !== userNames)
                          && <p>{userNames}</p>
                      }

                    </div> {/*.col-ms-4 */}

                </div> {/*.row */}

              </div> {/*.profile-overview */}

        </div> {/*.my-card */}

      </Link>

      {/* Se agrega una condición para mostrar el botón de borrar solo en las pestañas principales, excluyendo la pestaña de busqueda */}

      {

        withoutButton || !user.admin ? ( 

          <></>

        ) : (

          <button className="btn btn-danger col-12" onClick={deleteMovie}>Borrar</button>

        )

      }

    </div>



  </>

  )
}
