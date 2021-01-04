import React from 'react';

const FilterBasics = () => {
    return (
        <div>
            <p>Filter</p>
            <input type='checkbox' id='basicsCheckBox' />
            <label htmlFor='basicsCheckBox'>Basics</label>
        </div>
    );
};

export default FilterBasics;