import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { Login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = JSON.parse(localStorage.getItem('lastPath')) || '/';

    Login('Usuario Genérico');

    navigate(lastPath, {

        replace: true,

    });

  }
  
  return (
    <div className="form container">

      <h1 className="h1 text-center">Login</h1>

      {/* <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >  
      
        Login

      </button> */}

      <form onSubmit={onLogin}>

        <div className="form-group">

          <label htmlFor="email-address">Email address</label>
          <input type="email" className="form-control mt-2" id="email-address" placeholder="someone@email.com"/>
          <small className="small text-muted">This field is not necessary for this demo</small>

        </div>

        <div className="form-group">

          <label htmlFor="user-password">Password</label>
          <input type="password" className="form-control mt-2" id="email-address" placeholder="someone@email.com"/>
          <small className="small text-muted">This field is not necessary for this demo</small>

        </div>
        
        <input type="submit" className="btn btn-outline-primary col-12 mt-3"/>

      </form>



    </div>
  )
}
