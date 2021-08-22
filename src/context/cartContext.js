import React, { useContext, useState } from 'react'
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart = [] }) {

    const [cart, setCart] = useState(defaultCart);

   
    function add(item) {
       

        setCart([...cart, item]);
    }

    function remove(itemId) {
        
        
        setCart(cart.filter(item => item.id !== itemId));
    }

    function clear() {
        setCart([]);
    }

    return <CartContext.Provider 
    value={{ 
        cart, 
        add, 
        remove, 
        clear,
        isEmpty: cart.length === 0
    }}>
        { children }
    </CartContext.Provider>

}