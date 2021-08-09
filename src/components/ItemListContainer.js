import React from 'react';
import ItemCount from './itemCount';

const ItemListContainer = (props) => {
    return (
        <div>
        <h2>{props.title}</h2>
        <ItemCount stock="10" initial="1"/>       
        </div>
    )
}

export default ItemListContainer