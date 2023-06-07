import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch(action.type) {

        case types.login:
            return {
                
                ...state, // Se desestructura el state por si llegan a agregarse propiedades
                logged: true,
                user: action.payload,

            };

        case types.logout:
            return {

                logged: false,
            
            };

        case types.Admin: 
            return {

                ...state,
                user: action.payload,

            };

        default:
            return state;

    }

}