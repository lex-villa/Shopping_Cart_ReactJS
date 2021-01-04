import React from 'react';

import FilterBasics from '../../components/Filters/FilterBasics/FilterBasics';
import FilterPrices from '../../components/Filters/FilterPrices/FilterPrices';
import FilterSortBy from '../../components/Filters/FilterSortBy/FilterSortBy';

import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className='FilterBarContainer'>
            <p className='FilterBarTitle'>Filters:</p>
            <div className='Basics'>
                <FilterBasics />
            </div>
            <div className='Prices'>
                <FilterPrices />
            </div>
            <div className='SortBy'>
                <FilterSortBy />
            </div>
        </div>
    );
};

export default FilterBar;