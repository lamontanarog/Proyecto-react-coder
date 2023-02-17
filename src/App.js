import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'Catalogo Vintage Jewelry'} />
    </>
  );
}

export default App;
