import { HeroList } from "../components"

export const MarvelPage = () => {

  return (

    <>
      
      <h1 className="animate__animated animate__flash mt-4 h1">Marvel Comics</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'}/>
    
    </>

  )
}
