import { fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "../../src/heroes";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockedUseNavigate = jest.fn(); // Define mockedUseNavigate

jest.mock('react-router-dom', () => ({  //Se hace un mock completo de la libreria, pero solo sobrescribimos la función que necesitamos

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}))

describe('Pruebas en <Hero/>', ()=> {

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el heroe spider-man', ()=> {

        render(
        
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        
            <Routes>

                <Route path="hero/:id" element={ <Hero/> }/> 

            </Routes>
        
        </MemoryRouter>
        
        );
        
        expect(screen.getByText("Spider Man")).toBeTruthy();

    }); 

    test('Si no existe el heroe debe regresar a la pantalla principal', ()=> {
    
        const wrongRoute = '/hero/marvel-spi';

        render(
        
            <MemoryRouter initialEntries={[wrongRoute]}>
            
                <Routes>
    
                    <Route path="hero/:id" element={ <Hero/> }/> 
                    <Route path="/marvel" element={ <h1>Página marvel</h1> } />
    
                </Routes>
            
            </MemoryRouter>
            
            );

        expect(screen.getByText("Página marvel")).toBeTruthy();
    
    });

    test('Debe navegar a marvel al presionar el botón return', ()=> { 

        render(
        
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
            
                <Routes>
    
                    <Route path="hero/:id" element={ <Hero/> }/> 
    
                </Routes>
            
            </MemoryRouter>
            
            );

    screen.debug();

    const button = screen.getByRole('button');

    fireEvent.click( button );

    expect(mockedUseNavigate).toHaveBeenCalled();
    
    });

});