import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <>
    
      <h1 className ="animate__animated animate__flash mt-4 h1">DC Comics</h1>
      <hr />

      <HeroList publisher={'DC Comics'}/>
    
    </>
  )
}
