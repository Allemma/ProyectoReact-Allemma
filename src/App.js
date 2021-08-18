import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>      
    <NavBar/>
    <Switch className="container-fluid p-3">
        
          <Route exact path="/item/:id">
          <h2>Vista Detail</h2>
          <ItemDetailContainer />  
        </Route>


        <Route exact path="/cart/">
              <h2>Vista de Carrito</h2>
              <Cart />  
        </Route>

        
        <Route exact path="/">
          <ItemListContainer title='Vista Item List'/>
        </Route>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
