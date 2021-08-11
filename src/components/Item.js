import React from 'react'
import ItemCount from './ItemCount';

const Item = ({items}) => {

    function onAdd(){
        alert('Agregado al carrito');
    }

    return (
        <>
            <div className="col-md-2">
                <p>{items.pictureUrl}</p>
            </div>
            <div className="col-md-7">
            <h2>Titulo: {items.title}</h2>
                <p>SKU: {items.id}</p>
                <p>Precio: {items.price}</p>
            </div>
            <div className="col-md-3">
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </>
    )
}

export default Item