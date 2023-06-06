import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { collection, onSnapshot, query, where, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from "react";

export const Hero = () => {
  
  const [heroesList, setHeroesList] = useState([]);
  const heroesCollectionRef = collection(db, "heroes");

  const [updatedComicName, setUpdatedComicName] = useState("");
  const [updatedComicAuthor, setUpdatedComicAuthor] = useState("");
  const [updatedComicDate, setUpdatedComicDate] = useState(0);

  const { id } = useParams();

  useEffect(() => {

    const q = query(heroesCollectionRef, where("heroId", "==", id.toString()));

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({

        ...doc.data(),
        id: doc.id,

      }));

      setHeroesList(data);

    });

    return () => unsubscribe();

  }, []);
  
  const navigate = useNavigate();

  const onNavigate = () => {

    navigate(-1);

  }

  const updateHeroeTitle = async(id) => {

    const heroesDoc = doc(db, "heroes", id);
    await updateDoc(heroesDoc, { "bestComic.comicName": updatedComicName});

  }

  const updateHeroeAuthor = async(id) => {

    const heroesDoc = doc(db, "heroes", id);
    await updateDoc(heroesDoc, { "bestComic.comicAuthor": updatedComicAuthor});

  }

  const updateHeroeDate = async(id) => {

    const heroesDoc = doc(db, "heroes", id);
    await updateDoc(heroesDoc, { "bestComic.comicDate": updatedComicDate.toString()});

  }

  return (
    <>
      { heroesList.length === 0 ? (
      <></>
    ) : (
      <>
        <div className="overlay">

          <div className="overlay-image animate__animated animate__fadeInLeft">

            <img
              src={`/heroes/${heroesList[0]?.heroId}.jpg`}
              alt={heroesList[0]?.character.superhero}
              className="rounded"
            />

          </div>

        </div>

        <div className="text-center mt-2 border mb-3 semi-rounded">

          <h2 className="h2 text-uppercase">{heroesList[0]?.character.superHero}</h2>
          <hr />

          <p>Alter ego: {heroesList[0]?.character.alterEgo}</p>
          <p>Publisher: {heroesList[0]?.publisher}</p>
          <p>First appereance: {heroesList[0]?.character.firstAppearance}</p>
          <hr />

          <h3 className="h3 text-uppercase">Characters</h3>
          <hr />

          <p>{heroesList[0]?.character.userNames}</p>

          <hr />

          <h2 className="h1 text-success">Best comic</h2>
          <hr />

          <div>

            <img src="/public/heroes/trophy.jpg" alt="trophy" width="300px" height="300px"/>

          </div>

          <div className="d-flex mb-4 flex-column align-items-start p-3">

            <h3 className="h3 text-muted" style={{margin: "0 auto"}}>Comic: <span className="h4 text-secondary">{heroesList[0].bestComic.comicName}</span></h3>

            <div className="container border mt-3 p-3 mb-2">

              <label htmlFor="updateComicName">Nombre del comic:</label>
              <input type="text" className="form-control" onChange={(e) => setUpdatedComicName(e.target.value)}/>
              <button className="btn btn-warning col-12 mt-2" onClick={() => updateHeroeTitle(heroesList[0].id)}>Actualizar</button>

            </div>
            
            <h3 className="h3 text-muted" style={{margin: "0 auto"}}>Author: <span className="h4 text-secondary">{heroesList[0].bestComic.comicAuthor}</span></h3>

            
            <div className="container border mt-3 p-3 mb-2">

              <label htmlFor="updateComicAuthor">Nombre del autor:</label>
              <input type="text" className="form-control" onChange={(e) => setUpdatedComicAuthor(e.target.value)}/>
              <button className="btn btn-warning col-12 mt-2" onClick={() => updateHeroeAuthor(heroesList[0].id)}>Actualizar</button>

            </div>

            <h3 className="h3 text-muted" style={{margin: "0 auto"}}>Release date: <span className="h4 text-secondary">{heroesList[0].bestComic.comicDate}</span></h3>

            <div className="container border mt-3 p-3 mb-2">

              <label htmlFor="updateComicDate">Fecha de estreno:</label>
              <input type="number" className="form-control" onChange={(e) => setUpdatedComicDate(Number(e.target.value))}/>
              <button className="btn btn-warning col-12 mt-2" onClick={() => updateHeroeDate(heroesList[0].id)}>Actualizar</button>

            </div>

          </div>

          <button onClick={onNavigate} className="btn btn-primary w-100">
            Return
          </button>

        </div>
      </>
    )}
    
    </>
  )
}

