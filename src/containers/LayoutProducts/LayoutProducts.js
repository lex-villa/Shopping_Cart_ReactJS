import React from 'react';

import FilterBar from '../FilterBar/FilterBar';
import Products from '../Products/Products';

import './LayoutProducts.css';

const LayoutProducts = () => {
    return (
        <div className='MainSection '>
            <FilterBar />
            <Products />
        </div>
    );
};

export default LayoutProducts;
