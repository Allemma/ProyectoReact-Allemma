import React from 'react'
import { NavLink } from 'react-router-dom';

const P404 = () => {
    return (
        <div className="container vista-productos p-5 text-center align-self-center">
            <span className="p404">404</span>
            <h2><strong>Página no encontrada</strong></h2>
            <p>No se ha encontrado la página que buscas. Puedes volver a la página anterior o visitar nuestra página de inicio.</p>
            <NavLink className="btn btn-carrito" to="/">Ver productos</NavLink>
        </div>
    )
}

export default P404
