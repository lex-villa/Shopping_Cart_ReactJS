import React from 'react';

import './FilterSortBy.css';

const FilterSortBy = () => {
    return (
        <div className='FilterSortByContainer'>
            <label htmlFor='sortOptions'>Sort by:</label>
            <select id='sortOptions'>
                <option>Relevant</option>
                <option>Not Relevant</option>
            </select>
        </div>
    );
};

export default FilterSortBy;