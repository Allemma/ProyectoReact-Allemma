import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    function onAdd(){
        alert('Agregado al carrito');
    }

    return (
        <>
                <div className="col-md-2 align-self-center">
                    <Link to={`/item/${item.id}`}>                    
                        <img  alt={item.title} />
                    </Link>
                </div>
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