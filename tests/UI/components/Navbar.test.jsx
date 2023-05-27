import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/UI";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({  //Se hace un mock completo de la libreria, pero solo sobrescribimos la función que necesitamos

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}))

describe('Pruebas en <Navbar/>', ()=> {

    const contextValue = {

        logged: true,
        user: {

            id: 'ABC',
            name: 'Gerardo Vasquez',

        },
        Logout: jest.fn()

    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el nombre del usuario loggeado', ()=> {

        const { user } = contextValue;

        render(

            <MemoryRouter initialEntries={['/marvel']}>

                <AuthContext.Provider value={ contextValue }>

                    <Navbar />

                </AuthContext.Provider>

            </MemoryRouter>

        )

        expect(screen.getByText(user.name)).toBeTruthy();

    }); 

    test('Debe llamar el logout y navigate cuando se hace click en el botón', ()=> {

        render(

            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter>      

                    <Navbar />

                </MemoryRouter>
            
            </AuthContext.Provider>

        )

        const btnLogout = screen.getByTestId('btn-logout');
        fireEvent.click(btnLogout);

        expect( contextValue.Logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
         
    
    });

});