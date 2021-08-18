import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const getItemsDetail = id => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            let obtenerProductos = [
                {                
                id: "1",
                title: "nombre del producto 1",
                pictureUrl: "imagen-01.jpg",
                price: 20
                },
                {                
                id: "2",
                title: "nombre del producto 2",
                pictureUrl: "imagen-02.jpg",
                price: 21
                },
                {                
                id: "3",
                title: "nombre del producto 3",
                pictureUrl: "imagen-03.jpg",
                price: 22
                }
            ];
    
            if(obtenerProductos){
                res(obtenerProductos);
                res(obtenerProductos.filter(producto => producto.id === id ));
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemDetailContainer = () => {

    const { id } = useParams();
    console.log(id);

    const [ itemsDetalles, setItemsDetalles ] = useState([]);

    useEffect( () => {
        console.log('ItemDetailContainerInicializado');
        getItemsDetail(id).then(itemsDetalle => {
            setItemsDetalles(itemsDetalle);
        });
    }, [id]);

    return (        
        <>
            <ItemDetail itemsDetalle={itemsDetalles} /> 
        </>
    )
}

export default ItemDetailContainer