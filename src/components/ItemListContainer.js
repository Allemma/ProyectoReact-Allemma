import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

const getItems = () => {
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
                res(obtenerProductos);
            } else {
                rej('Tarea Error');
            }
        }, 2000);
    })
}

const ItemListContainer = ({title}) => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);
    
    useEffect( () => {
        getItems().then(item => {  
            setItems(item); 
        });
    }, []);    

    return (
        <div>
            <h2>{title} {categoryId}</h2>   
            <ItemList item={items} />    
        </div>
    )
}

export default ItemListContainer
