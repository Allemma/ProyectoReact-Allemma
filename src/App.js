import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import P404 from './components/P404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/cartContext';

function App() {
  return (
    <CartProvider>    
      <BrowserRouter>      
        <NavBar/>
        <Switch className="container-fluid p-3">
            
            <Route exact path="/item/:id">
              
              <ItemDetailContainer />  
            </Route>

            <Route exact path="/cart/">
              <h2>Vista de Carrito</h2>
              <Cart />  
            </Route>

            <Route exact path="/categoria-:categoryId" >
              <ItemListContainer />
            </Route>

            <Route exact path="/">
              <ItemListContainer title={'Bienvenidos a E-Tienda'} />
            </Route>

            <Route>
              <P404 />
            </Route>

        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
