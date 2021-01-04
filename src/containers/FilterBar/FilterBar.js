import React from 'react';

import FilterBasics from '../../components/Filters/FilterBasics/FilterBasics';
import FilterPrices from '../../components/Filters/FilterPrices/FilterPrices';
import FilterSortBy from '../../components/Filters/FilterSortBy/FilterSortBy';

const FilterBar = () => {
    return (
        <div>
            <FilterBasics />
            <FilterPrices />
            <FilterSortBy />
        </div>
    );
};

export default FilterBar;