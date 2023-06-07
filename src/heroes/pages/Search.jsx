import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
// import { getHeroesByName } from "../helpers";
import { db } from "../../config/firebase";
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [heroesList, setHeroesList] = useState([]);
  const heroesCollectionRef = collection(db, "heroes");

  const { q  = '' } = queryString.parse(location.search);

  useEffect(() => {

    console.log(q);
    const newq = query(heroesCollectionRef, where("character.superHero", "==", q));

    const unsubscribe = onSnapshot(newq, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({

        ...doc.data(),
        id: doc.id,

      }));

      setHeroesList(data);

    });

    return () => unsubscribe();

  }, [q]);

  //const heroes = getHeroesByName(q);
  const showSearch = (q.length === 0);
  // const showError = (q.length > 0) && heroes.length === 0;
  // const showError = (q.length > 0);

  const { searchText, onInputChange } = useForm({

    searchText: q,
  
  });
  
  const onSearchSubmit = (e) => {
    
    e.preventDefault();
    // if( searchText.trim().length <= 0) return;
    navigate(`?q=${searchText}`);
  
  }

  return (
    <>
    
      <h1 className="text-center text-uppercase">Heroes database</h1>
      <hr />

      <div className="row">

        <div className="col-sm-5">

          <h2 className="h2">Searching</h2>
          <hr />
          <form onSubmit={ onSearchSubmit } data-testid="formulario">

            <input 
              type="text"
              placeholder="Example: Wonder Woman"
              className="form-control"
              name="searchText" 
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">Search</button>

          </form>

        </div> {/*.col-5 */}

          <div className="col-sm-7">

          <h2>Results</h2>
          <hr />

          {/* {

            (q === '')
            ?          
            <div className="alert alert-primary">

            Search a hero

            </div>
            : (heroes.length === 0) &&
            <div className="alert alert-danger">

            The hero <b>{q}</b> was not found

            </div>

          } */}

          <div data-testid="SearchaHero" className="alert alert-primary" style={{display: showSearch ? "" : "none"}}>

          Search a hero

          </div>

          <div data-testid="errorHero" className="alert alert-danger" style={{display: (q.length > 0) && heroesList.length === 0 ? "" : "none"}}>

            The hero <b>{q}</b> was not found

          </div>

          {

            heroesList.map( Hero => (

              <HeroCard key={Hero.heroId} Hero={Hero} withoutButton={true}/>

            ))

          }

          {

            console.log(heroesList)

          }


          {/* <HeroCard /> */}

        </div> {/*.col-7 */}

      </div> {/*.row */}

    </>
  )
}
