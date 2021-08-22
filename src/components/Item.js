import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

    return (
        <>
            <div className="col-md-3 align-self-center vista-productos">            
                <Link to={`/item/${item.id}`}>                    
                    <img className="imagen-producto-list" alt={item.title} src="https://www.armadagamer.com/wp-content/uploads/img/motherboard-rog-strix-z390-e-gaming_1855931_md.jpg" />
                </Link>
                <h2 className="titulo-producto">{item.title}</h2>
                <p><strong>SKU:</strong> {item.id}</p>
                <p><strong>Precio:</strong> u$s {item.price}</p>
                <p>{item.pictureUrl}</p>

                <Link 
                to={`/item/${item.id}`}
                className="col-md-12 btn btn-detalle"
                > 
                Ver detalle
                </Link>
            </div>
        </>
    )
}

export default Item
