import React from 'react';

import HeaderBar from './containers/HeaderBar/HeaderBar';
import Products from './containers/Products/Products';
import FilterBar from './containers/FilterBar/FilterBar';

import './App.css';

function App() {
  return (
    <div>
      <HeaderBar />
      <main>
          <FilterBar />
          <Products />
      </main>
    </div>
  );
}

export default App;
