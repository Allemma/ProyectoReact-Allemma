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
                <div className="col-md-7">
                <h2>Titulo: {itemsDetalle.title}</h2>
                    <p>SKU: {itemsDetalle.id}</p>
                    <p>Precio: {itemsDetalle.price}</p>
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </div>
            </div>        
        </>
    )
}

export default Detail