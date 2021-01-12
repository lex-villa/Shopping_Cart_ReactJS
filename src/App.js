import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderBar from './containers/HeaderBar/HeaderBar';
import SideCartProducts from './components/Navigation/SideCartProducts/SideCartProducts';
import DetailProduct from './containers/DetailProduct/DetailProduct';
import LayoutProducts from './containers/LayoutProducts/LayoutProducts';

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
      <main>
        <Switch>
          <Route path='/ProductDetail/:productId' component={DetailProduct} />
          <Route path='/' component={LayoutProducts} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
