import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const Detail = ({ itemsDetalle }) => {   

    const [ agregadoAlCarrito, setAgregadoAlCarrito ] = useState(0);  
    const { add } = useCartContext();

    
    function onAdd(cantidadAdd){
        setAgregadoAlCarrito(cantidadAdd);
        console.log('Se agregaron', cantidadAdd);
        console.log('El item agregado es id:', itemsDetalle.id );
        
        add({
           item: itemsDetalle.title,
           quantity: cantidadAdd,
           id: itemsDetalle.id,
           price: itemsDetalle.price,
           image: itemsDetalle.pictureUrl
        });

    }

    return (
        <>
            <div className="row vista-productos p-2">
                <div className="col-md-5 p-3 align-self-center">
                    <img className="imagen-producto-detail" alt={itemsDetalle.pictureUrl} src="https://www.armadagamer.com/wp-content/uploads/img/motherboard-rog-strix-z390-e-gaming_1855931_md.jpg" />                 
                </div>
                <div className="col-md-7 p-2 align-self-center">
                <h2 className="titulo-producto">{itemsDetalle.title}</h2>
                    <p><strong>SKU:</strong> {itemsDetalle.id}</p>     
                    <p>{itemsDetalle.pictureUrl}</p>
                    <p className="description-producto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>               
                    <p><strong>Precio:</strong> ${itemsDetalle.price}</p>  
                {
                    agregadoAlCarrito === 0
                    ?
                        <ItemCount stock={10} initial={0} onAdd={onAdd} />
                    :

                        <Link 
                        to="/cart"
                        className="col-md-12 btn btn-carrito"
                        >
                        Terminar mi compra
                        </Link>
                }
                </div>                
            </div>                 
        </>
    )
}

export default Detail
