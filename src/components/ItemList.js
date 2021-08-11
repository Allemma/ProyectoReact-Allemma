import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className="row">
            <Item items={items} />
        </div>
    )
}

export default ItemList