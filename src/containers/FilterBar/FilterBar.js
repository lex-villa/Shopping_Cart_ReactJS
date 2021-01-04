import React from 'react';

import FilterBasics from '../../components/Filters/FilterBasics/FilterBasics';
import FilterPrices from '../../components/Filters/FilterPrices/FilterPrices';
import FilterSortBy from '../../components/Filters/FilterSortBy/FilterSortBy';

import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className='FilterBarContainer'>
            <FilterBasics />
            <FilterPrices />
            <FilterSortBy />
        </div>
    );
};

export default FilterBar;