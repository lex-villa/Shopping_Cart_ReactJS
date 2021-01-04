import React from 'react';

const FilterPrices = () => {
    return (
        <div>
            <p>Prices:</p>
            <div>
                <input type='radio' id='firstRange' name='pricesRange' />
                <label htmlFor='firstRange'>$1 - $50</label>

                <input type='radio' id='secondRange' name='pricesRange' />
                <label htmlFor='secondRange'>$51 - $100</label>

                <input type='radio' id='thirdRange' name='pricesRange' />
                <label htmlFor='thirdRange'>$101 - $200</label>
            </div>
        </div>
    );
};

export default FilterPrices;