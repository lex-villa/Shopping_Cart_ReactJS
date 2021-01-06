import React from 'react';

import './SideCartProducts.css';

const SideCartProducts = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <>
            <div className={attachedClasses.join(' ')}>

            </div>
        </>
    );
};

export default SideCartProducts;