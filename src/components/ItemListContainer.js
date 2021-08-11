import ItemCount from './ItemCount';
import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';


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
                res(obtenerProductos);
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemListContainer = ({title}) => {

    function onAdd(){
        alert('Agregado al carrito');
    }
    const [items, setItems] = useState([]);

    useEffect( () => {
        console.log('ItemListContainerInicializado');
        getItems().then(items => {
            setItems(items);
        });
    }, []);    

    return (
        <div>
            <h2>{title}</h2>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            
            <h2>{title}</h2>   
            {items.map(items => (
                <ItemList key={items.id} items={items} />      
            ))}   
        </div>
    )
}

export default ItemListContainer