import React from 'react';

const FilterSortBy = () => {
    return (
        <div>
            <label htmlFor='sortOptions'>Sort by:</label>
            <select id='sortOptions'>
                <option>Relevant</option>
                <option>Not Relevant</option>
            </select>
        </div>
    );
};

export default FilterSortBy;