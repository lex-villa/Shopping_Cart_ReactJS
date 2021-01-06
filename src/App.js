import React, {useState} from 'react';

import HeaderBar from './containers/HeaderBar/HeaderBar';
import Products from './containers/Products/Products';
import FilterBar from './containers/FilterBar/FilterBar';
import SideCartProducts from './components/Navigation/SideCartProducts/SideCartProducts';

import './App.css';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const drawerToggleClicked = () => {
    setShowSideDrawer(!showSideDrawer)
  };

  return (
    <div>
      <HeaderBar clicked={drawerToggleClicked} />
      <SideCartProducts open={showSideDrawer} />
      <main>
          <FilterBar />
          <Products />
      </main>
    </div>
  );
}

export default App;
