import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import {HeroesRoutes} from '../heroes'
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
    
        <Routes>

            <Route path="/login" element={

              <PublicRoute>

                <LoginPage/>

              </PublicRoute>

            }/>
            <Route path="/*" element={

              <PrivateRoute> {/*Se manda como high order component para validar si el usuario está loggeado */}

                <HeroesRoutes/>

              </PrivateRoute>

            } />

            {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

        </Routes>

    </>
  )
}
