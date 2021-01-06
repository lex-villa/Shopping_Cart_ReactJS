import React, {useState} from 'react';

import HeaderBar from './containers/HeaderBar/HeaderBar';
import Products from './containers/Products/Products';
import FilterBar from './containers/FilterBar/FilterBar';
import SideCartProducts from './components/Navigation/SideCartProducts/SideCartProducts';

import './App.css';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const drawerToggleClicked = () => {
    setShowSideDrawer(!showSideDrawer)
  };

  return (
    <div>
      <HeaderBar clicked={drawerToggleClicked} />
      <SideCartProducts closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <main className='MainSection'>
          <FilterBar />
          <Products />
      </main>
    </div>
  );
}

export default App;
