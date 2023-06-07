import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate(); //CustomHook para entrar en el Navigation Provider 

    const { user, Logout, adminLogin, adminLogout} = useContext(AuthContext);

    const onLogout = () => {

        Logout();

        navigate('/login', {

            replace: true,

        });

    }

    const onAdmin = () => {

        if(!user.admin) {

            adminLogin();

        } else {

            adminLogout();

        }

    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 sticky-top">
                
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Associations
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            to="/marvel"
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            end
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            to="/dc"
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            end
                        >
                            DC
                        </NavLink>
                        <NavLink 
                            to="/search"
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            end
                        >
                            Search
                        </NavLink>

                        {/* Se muestra el link hacia el administrador de manera condicional al registro de admin */}

                        {

                            user.admin ? (

                                <NavLink 
                                to="/admin"
                                className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                end
                                >
                                    Crear
                                </NavLink>

                            ) : (

                                <></>

                            )

                        }


                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        
                        <button
                            data-testid="btn-logout"
                            className='nav-item nav-link btn'
                            onClick={onAdmin}
                        >

                            { user.admin ? ("Administrator") : ("User") }

                        </button>

                        <span className='nav-item nav-link text-primary'>

                            {user?.name} {/*el user? indica parar de leer la propiedad si es undefined */}

                        </span>

                        <button
                            data-testid="btn-logout"
                            className='nav-item nav-link btn'
                            onClick={onLogout}
                        >

                            Logout

                        </button>

                    </ul>
                </div>
            </nav>
            
        </>
    )
}