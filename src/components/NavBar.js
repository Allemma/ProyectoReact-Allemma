import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">E-React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">                            
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="nav-link" to="/">Categoria 1</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="nav-link" to="/">Categoria 2</NavLink>
                        </li>
                        <li>                            
                            <NavLink className="nav-link" to="/">Categoria 3</NavLink>
                        </li>
                    </ul>           
                    <CartWidget />             
                </div>
            </nav>
        </div>
    )
}

export default NavBar