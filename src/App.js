import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      <div className="container-fluid p-3">        
        <ItemListContainer title='Titulo ItemListContainer'/>
        <h2>Las ofertas de la semana</h2>
       </div>
    </>
  );
}

export default App;
