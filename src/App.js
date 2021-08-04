import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title='Titulo list item'/>
      <h2>Las ofertas de la semana</h2>
    </>
  );
}

export default App;
