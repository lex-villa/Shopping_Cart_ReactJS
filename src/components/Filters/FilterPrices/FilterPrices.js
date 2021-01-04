import React from 'react';

import './FilterPrices.css';

const FilterPrices = () => {
    return (
        <div className='FilterPricesContainer'>
            <p>Prices:</p>
            <div className='RadioGroupContainer'>
                <div className='RadioGroupItem'>
                    <input type='radio' id='firstRange' name='pricesRange' />
                    <label htmlFor='firstRange'>$1 - $50</label>
                </div>

                <div className='RadioGroupItem'>
                    <input type='radio' id='secondRange' name='pricesRange' />
                    <label htmlFor='secondRange'>$51 - $100</label>
                </div>

                <div className='RadioGroupItem'>
                    <input type='radio' id='thirdRange' name='pricesRange' />
                    <label htmlFor='thirdRange'>$101 - $200</label>
                </div>
            </div>
        </div>
    );
};

export default FilterPrices;