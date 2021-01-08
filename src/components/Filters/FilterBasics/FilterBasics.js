import React from 'react';

import './FilterBasics.css';

const FilterBasics = (props) => {

    const handleClick = (event) => {
        console.log("se esta ejecutando el click al input")
        props.onFilterBasics('basics');
    };

    return (
        <div className='FilterBasicsContainer'>
            <input type='checkbox' id='basicsCheckBox' onClick={handleClick} />
            <label htmlFor='basicsCheckBox'>Basics</label>
        </div>
    );
};

export default FilterBasics;