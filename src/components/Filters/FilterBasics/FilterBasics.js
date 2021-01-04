import React from 'react';

import './FilterBasics.css';

const FilterBasics = () => {
    return (
        <div className='FilterBasicsContainer'>
            <p>Filter</p>
            <input type='checkbox' id='basicsCheckBox' />
            <label htmlFor='basicsCheckBox'>Basics</label>
        </div>
    );
};

export default FilterBasics;