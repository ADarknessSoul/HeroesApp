import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer.js', ()=> {

    const initialState = {
        
        logged: false,

    }

    test('Debe retornar el estado por defecto', ()=> {

        const newState = authReducer({logged: false}, {});
        expect(newState).toEqual({logged: false});

    }); 

    test('Debe de llamar al login, y autenticar como establecer el usuario', ()=> {
    
        const action = {

            type: types.login,
            payload: {
    
                id: "ABC",
                name: "Gerardo Vasquez Ordaz",
    
            },
    
        } 

        const newState = authReducer(initialState, action);

        expect(newState.logged).toBeTruthy();
        expect(newState).toEqual({

            logged: true,
            user: action.payload,

        });
    
    });

    test('Debe de llamar al logout para borrar el nombre del usuario, y cambiar el logged en false', ()=> {
    
        const state = {

            logged: true,
            user: {

                id: "ABC",
                name: "Gerardo Vasquez Ordaz",

            }

        }

        const action = {

            type: types.logout,
    
        } 

        let newState = authReducer(state, action);

        expect(newState).toEqual(initialState);
    
    });

});