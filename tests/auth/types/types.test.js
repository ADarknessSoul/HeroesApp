import { screen } from "@testing-library/react";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en types.js', ()=> {

    test('Debe regresar los types iniciales', ()=> {

        expect(types).toMatchSnapshot();

    }); 

});