import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const HeroList = useMemo( () => getHeroesByPublisher(publisher), [publisher]);  // Memoize the result of calling `getHeroesByPublisher` with the `publisher` as a dependency

  return (
    <>
    
        <div className="row rows-cols-1 row-cols-md-3 g-3">

            {

                HeroList.map((Hero) => (

                     // <li key={Hero.id}>{Hero.superhero}</li>
                    <HeroCard key={Hero.id} Hero={Hero}/>

                ))

            }

        </div>
    
    </>
  )
}
