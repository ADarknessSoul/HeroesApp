import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q  = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({

    searchText: q,
  
  });
  
  const onSearchSubmit = (e) => {
    
    e.preventDefault();
    // if( searchText.trim().length <= 0) return;
    navigate(`?q=${searchText.toLowerCase()}`);
  
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

          <div data-testid="errorHero" className="alert alert-danger" style={{display: showError ? "" : "none"}}>

            The hero <b>{q}</b> was not found

          </div>

          {

            heroes.map( Hero => (

              <HeroCard key={Hero.id} Hero={Hero}/>

            ))

          }

          {/* <HeroCard /> */}

        </div> {/*.col-7 */}

      </div> {/*.row */}

    </>
  )
}
