import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const getItemsDetail = ( id ) => {
    return new Promise((res, rej) => {
        setTimeout(() =>{            
            let obtenerProductos = [
                {
                id: "1",
                title: "nombre del producto 1",
                pictureUrl: "imagen-01.jpg",
                categoria: "mouse",
                price: 20
                },
                {
                id: "2",
                title: "nombre del producto 2",
                pictureUrl: "imagen-02.jpg",
                categoria: "teclado",
                price: 21
                },
                {
                id: "3",
                title: "nombre del producto 3",
                pictureUrl: "imagen-03.jpg",
                categoria: "memoria",
                price: 22
                },
                {
                id: "4",
                title: "nombre del producto 4",
                pictureUrl: "imagen-04.jpg",
                categoria: "auriculares",
                price: 23
                }
            ];

            if(obtenerProductos){
                res(obtenerProductos.filter( producto => producto.id === id ));                
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemDetailContainer = () => {
    
    const [ cargando, setCargando ] = useState(true);
    const { id } = useParams();
    const [ itemsDetalles, setItemsDetalles ] = useState([]);    
    
    useEffect( () => {
        console.log('ItemDetailContainerInicializado');
        getItemsDetail(id).then(itemsDetalle => {
            setItemsDetalles(itemsDetalle[0]);
            setCargando(false);
        });
    }, [id]);

    return (        
        <>
            {
                cargando 
                ? 
                    <Spinner />  
                : 
                    <ItemDetail itemsDetalle={itemsDetalles} /> 
            }
            
        </>
    )
}

export default ItemDetailContainer
