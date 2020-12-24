import React from 'react';

import HeaderBar from './containers/HeaderBar/HeaderBar';
import Products from './containers/Products/Products';

import './App.css';

function App() {
  return (
    <div>
      <HeaderBar />
      <main>
        <Products/>
      </main>
    </div>
  );
}

export default App;
