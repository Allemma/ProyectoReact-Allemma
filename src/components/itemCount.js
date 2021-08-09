import React, { useState } from 'react'

const ItemCount = (props) => {

        const [cantidadItem, setCantidadItem] = useState(0);

        function addCantidad() { 
            if(cantidadItem < props.stock) {
                setCantidadItem(cantidadItem + 1); 
            } else {
                console.log('no items más disponibles');
            }
        }
        function removeCantidad() { 
            if(cantidadItem >= 1 ) {
                setCantidadItem(cantidadItem - 1); 
            }
        }
        function onAdd() {
            console.log(`Se agregaron: ${cantidadItem}`);
        }
       
        return (
          <>
            <div className="item-count-carrito">  
                <div className="text-center stock-disponible">                
                    <span>Stock disponible: {props.stock}</span>
                    
                </div>              
                <div className="col-md-12 d-flex mt-1 align-items-center">
                        <button type="button" onClick={removeCantidad} className="btn btn-secondary btn-sm btn-form-input">-</button>
                        <input type="text" className="form-control form-input-number" placeholder={cantidadItem} />
                        <button type="button" onClick={addCantidad} className="btn btn-secondary btn-sm btn-form-input">+</button>
                </div>
                <button type="button" disabled={ props.stock <= 1 ? true : false } onClick={onAdd} className="col-md-12 btn btn-form-input">Agregar</button>
            </div>
            
          </>
        );
}

export default ItemCount