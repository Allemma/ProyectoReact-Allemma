import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const getItemsDetail = () => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            console.log('Montado getItemsDetail');

            let obtenerProductos = [
                {
                id: "1",
                title: "nombre",
                pictureUrl: "imagen-01.jpg",
                price: 20
                },
                {
                id: "2",
                title: "nombre 2",
                pictureUrl: "imagen-02.jpg",
                price: 21
                },
                {
                id: "3",
                title: "nombre 3",
                pictureUrl: "imagen-03.jpg",
                price: 22
                }
            ];
    
            if(obtenerProductos){
                res(obtenerProductos);
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemDetailContainer = () => {

    const [itemsDetalles, setItemsDetalles] = useState([]);

    useEffect( () => {
        console.log('ItemListContainerInicializado');
        getItemsDetail().then(itemsDetalle => {
            setItemsDetalles(itemsDetalle);
        });
    }, []);

    return (
        <>
            <ItemDetail itemsDetalle={itemsDetalles} /> 
        </>
    )
}

export default ItemDetailContainer