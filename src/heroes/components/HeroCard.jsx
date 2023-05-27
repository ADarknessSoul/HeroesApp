import { Link } from "react-router-dom";
import './HeroCard.css';

export const HeroCard = ({Hero}) => {

  const heroURL=`/heroes/${Hero.id}.jpg`;

  return (

    <Link to={`../hero/${Hero.id}`} className="my-card animate__animated animate__fadeIn">
    <img src={heroURL} className="img img-responsive" alt={Hero.superhero}/>
    <div className="profile-name">{Hero.superhero}</div>
      <div className="profile-position">{Hero.alter_ego}</div>
      <div className="profile-overview">
          <div className="profile-overview">
              <div className="row">
                  <div className="col-ms-4">
                      <h3>{Hero.publisher}</h3>
                      <p>Primera aparición: <br />{Hero.first_appearance}</p>
                      {
                          (Hero.alter_ego !== Hero.characters)
                          && <p>{Hero.characters}</p>
                      }
                  </div>
              </div>
          </div>
    </div>

    </Link>


  )
}
