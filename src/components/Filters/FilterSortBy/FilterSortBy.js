import React from 'react';

import './FilterSortBy.css';

const FilterSortBy = (props) => {
    const { onFilterSort, onFilterSortRemoved } = props;

    const handleChange = (event) => {
        const value = event.target.value;

        if (value === 'Rating') {
            onFilterSort(value);
        } else if (value === 'Prices') {
            onFilterSort(value);
        } else {
            onFilterSortRemoved();
        };
    };

    return (
        <div className='FilterSortByContainer'>
            <label htmlFor='sortOptions'>Sort by:</label>
            <select id='sortOptions' onChange={handleChange}>
                <option value={null}>None</option>
                <option value="Rating">Relevant</option>
                <option value="Prices">Pricing</option>
            </select>
        </div>
    );
};

export default FilterSortBy;