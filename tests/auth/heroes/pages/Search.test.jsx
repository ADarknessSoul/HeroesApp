import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../../../../src/heroes/pages/Search";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({  //Se hace un mock completo de la libreria, pero solo sobrescribimos la función que necesitamos

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate

}))


describe('Pruebas en <Search/>', ()=> {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', ()=> {

        const {container} = render(

            <MemoryRouter>

                <Search/>

            </MemoryRouter>

        );

        expect( container ).toMatchSnapshot();

    }); 


    test('Debe mostrar a batman y el input con el valor del queryString', ()=> {

        render(

            <MemoryRouter initialEntries={['/search?q=batman']}>

                <Search/>

            </MemoryRouter>

        );

        const inputValue = screen.getByRole('textbox');

        const image = screen.getByRole('img');

        const SearchaHero = screen.getByTestId('SearchaHero');

        expect(SearchaHero.style.display).toBe('none');

        expect(image.src).toContain('/heroes/dc-batman.jpg');

        expect(inputValue.value).toBe('batman');

    }); 

    test('Debe mostrar un error si no se encuentra el heroe (batman123)', ()=> {
    
        render(

            <MemoryRouter initialEntries={['/search?q=batman123']}>

                <Search/>

            </MemoryRouter>

        );

        const error = screen.getByTestId('errorHero');

        expect(error.style.display).not.toBe("none");
    
    });

    test('Debe llamar el navigate a la pantalla nueva', ()=> {
    
        render(

            <MemoryRouter initialEntries={['/search']}>

                <Search/>

            </MemoryRouter>

        );

        const input = screen.getByRole('textbox');

        fireEvent.change( input, {target: { name: 'searchText', value: 'superman'}});

        const form = screen.getByTestId('formulario');

        fireEvent.submit(form);

        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');
    
    });

});