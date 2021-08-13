import React from 'react'
import Detail from './Detail'

const ItemDetail = ({ itemsDetalle }) => {
    return (
        <div className="container">
            <div className="row estilos-row">
                {itemsDetalle.map(itemsDetalle => (                     
                    <Detail key={itemsDetalle.id} itemsDetalle={itemsDetalle} />
                ))}        
            </div>
        </div>
    )
}

export default ItemDetail