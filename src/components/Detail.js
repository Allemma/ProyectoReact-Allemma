import React from 'react'
import ItemCount from './ItemCount';

const Detail = ({ itemsDetalle }) => {

    function onAdd(){
        alert('Agregado al carrito');
    }

    return (
        <>
            <div className="vista-detail">
                <div className="col-md-5">
                    <p>{itemsDetalle.pictureUrl}</p>
                </div>
                <div className="col-md-7 p-2 align-self-center">
                <h2 className="titulo-producto">{itemsDetalle.title}</h2>
                    <p><strong>SKU:</strong> {itemsDetalle.id}</p>     
                    <p>{itemsDetalle.pictureUrl}</p>
                    <p className="description-producto">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>               
                    <p><strong>Precio:</strong> ${itemsDetalle.price}</p>  
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
            </div>        
        </>
    )
}

export default Detail