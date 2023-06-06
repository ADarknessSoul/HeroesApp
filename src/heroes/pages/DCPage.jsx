import { HeroList } from "../components"
import { db } from "../../config/firebase";
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";

export const DCPage = () => {
  
  const [heroesList, setHeroesList] = useState([]);
  const heroesCollectionRef = collection(db, "heroes");

  useEffect(() => {

    const q = query(heroesCollectionRef, where("publisher", "==", "DC Comics"));

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({

        ...doc.data(),
        id: doc.id,

      }));

      setHeroesList(data);

    });

    return () => unsubscribe();

  }, []);

  return (
    <>
    
      <h1 className ="animate__animated animate__flash mt-4 h1">DC Comics</h1>
      <hr />

      <HeroList heroesList={heroesList}/>
    
    </>
  )
}
