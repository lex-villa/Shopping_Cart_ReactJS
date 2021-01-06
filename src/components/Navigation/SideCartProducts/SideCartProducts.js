import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideCartProducts.css';

const SideCartProducts = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <>
            <Backdrop isShown={props.open} isClicked={props.closed} />
            <div className={attachedClasses.join(' ')}>

            </div>
        </>
    );
};

export default SideCartProducts;