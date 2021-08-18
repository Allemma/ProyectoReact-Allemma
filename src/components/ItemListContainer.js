import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';


const getItems = () => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
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
                res(obtenerProductos.filter(producto => producto.id === 3 ));
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemListContainer = ({title}) => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        console.log('ItemListContainerInicializado');       
        getItems().then(item => {
            setItems(item);
        });
    }, []);    

    return (
        <div>
            <h2>{title}</h2>   
            <ItemDetailContainer />           
            <ItemList item={items} />
             
            
        </div>
    )
}

export default ItemListContainer