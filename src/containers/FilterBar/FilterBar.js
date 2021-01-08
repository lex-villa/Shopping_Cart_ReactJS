import React from 'react';
import { connect } from 'react-redux';

import FilterBasics from '../../components/Filters/FilterBasics/FilterBasics';
import FilterPrices from '../../components/Filters/FilterPrices/FilterPrices';
import FilterSortBy from '../../components/Filters/FilterSortBy/FilterSortBy';
import * as actions from '../../store/actions/index';

import './FilterBar.css';

const FilterBar = (props) => {
    return (
        <div className="FilterBarSection">
            <div className='FilterBarContainer'>
                <p className='FilterBarTitle'>Filters:</p>
                <div className='Basics'>
                    <FilterBasics onFilterBasics={props.onFilterBasics} />
                </div>
                <div className='Prices'>
                    <FilterPrices />
                </div>
                <div className='SortBy'>
                    <FilterSortBy />
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterBasics: (filterOption) => dispatch(actions.filterBasics(filterOption)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);