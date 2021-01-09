import React from 'react';

import './FilterPrices.css';

const FilterPrices = (props) => {
    const { onFilterRangePrices } = props;

    const handleChange = (event) => {
        const value = event.target.value;
        onFilterRangePrices(value);
    };

    return (
        <div className='FilterPricesContainer'>
            <p>Prices:</p>
            <div className='RadioGroupContainer'>
                <div className='RadioGroupItem'>
                    <input
                        type='radio'
                        id='firstRange'
                        name='pricesRange'
                        value="first_range"
                        onChange={handleChange}
                    />
                    <label htmlFor='firstRange'>$1 - $50</label>
                </div>

                <div className='RadioGroupItem'>
                    <input
                        type='radio'
                        id='secondRange'
                        name='pricesRange'
                        value="second_range"
                        onChange={handleChange}
                    />
                    <label htmlFor='secondRange'>$51 - $100</label>
                </div>

                <div className='RadioGroupItem'>
                    <input
                        type='radio'
                        id='thirdRange'
                        name='pricesRange'
                        value="third_range"
                        onChange={handleChange}
                    />
                    <label htmlFor='thirdRange'>$101 - $200</label>
                </div>
            </div>
        </div>
    );
};

export default FilterPrices;