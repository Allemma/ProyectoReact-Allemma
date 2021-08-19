import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    function onAdd(){
        alert('Agregado al carrito');
    }

    return (
        <>
                <Link to={`/item/${item.id}`}> 
                <p>{item.pictureUrl}</p>
                </Link>
                <div className="col-md-7">
                <h2>{item.title}</h2>
                    <p>SKU: {item.id}</p>
                    <p>Precio: u$s {item.price}</p>
                </div>
                <div className="col-md-3">
                    <ItemCount stock={6} initial={1} onAdd={onAdd} />
                </div>
        </>
    )
}

export default Item