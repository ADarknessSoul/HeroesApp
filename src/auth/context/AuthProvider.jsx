import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return {

    logged: !!user,
    user,

  }

}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const Login = (name = "") => {

    const user = { id: 'ABC', name, admin: false,};  

    const action = {

      type: types.login,
      payload: {

        id: 'ABC',
        name,
        admin: false,

      }

    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);

  }

  const Logout = () => {

    localStorage.removeItem('user');

    const action = {

      type: types.logout,

    };
    dispatch(action);

  }

  const adminLogin = () => {

    let user = JSON.parse(localStorage.getItem("user"));

    user = {

      ...user,
      admin: true,

    }

    const action = {

      type: types.Admin,
      payload: {

        ...user,
        admin: true,

      }

    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);

  }

  const adminLogout = () => {

    let user = JSON.parse(localStorage.getItem("user"));

    user = {

      ...user,
      admin: false,

    }

    const action = {

      type: types.Admin,
      payload: {

        ...user,
        admin: false,

      }

    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);

  }

  return (
    
    <AuthContext.Provider value={{

      ...authState,
      Login,
      Logout,
      adminLogin,
      adminLogout

    }}>

        {children}

    </AuthContext.Provider>

  )
}
