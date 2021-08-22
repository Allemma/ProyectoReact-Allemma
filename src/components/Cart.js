import React from 'react'
import { useCartContext } from '../context/cartContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const { cart, remove, clear, isEmpty } = useCartContext();    
    
    return (
        <>      
            {isEmpty ? 
            <div className="container items-agregados text-center p-5">
                <p className="p-3"><strong>Carrito vacio</strong> <br />No hay items disponibles</p>
                <NavLink className="btn-carrito p-2" to="/">Ver productos</NavLink>
            </div>
            : 
            <ul className="container">            
            {cart.map(p => (                
                <li className="row items-agregados" key={p.id}>
                    <div className="col-md-3 align-self-center">
                        <img className="imagen-producto-carrito" alt={p.item} src="https://www.armadagamer.com/wp-content/uploads/img/motherboard-rog-strix-z390-e-gaming_1855931_md.jpg" />
                        <p><strong>Url: </strong>{p.image}</p>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <p className="titulo-producto">{p.item}</p>
                        <p className="titulos-items-agregados"><strong>id: </strong>{p.id}</p>
                        <p className="titulos-items-agregados"><strong>Cantidad agregada: </strong>{p.quantity}</p>
                        <p className="titulos-items-agregados"><strong>Precio por unidad: </strong>{p.price}</p>
                        <p className="titulos-items-agregados"><strong>Precio total: </strong>{p.price * p.quantity}</p>
                    </div>
                    <div className="col-md-2 align-self-center">
                        <button
                            className="btn-remove"
                            onClick={() => {
                                remove(p.id);
                            }}
                            >
                            Remove
                        </button>
                    </div>                        
                </li>
            ))}
                
            <button className="btn-vaciar-carrito" disabled={isEmpty} onClick={() => { clear() } } >Vaciar todo el carrito</button>
        </ul>
        }  
            
        </>
    )
}

export default Cart
