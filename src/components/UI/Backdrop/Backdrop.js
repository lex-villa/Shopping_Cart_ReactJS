import React from "react";

import './Backdrop.css'

const Backdrop = (props) => {
    return (
        props.isShown ? <div className='Backdrop' onClick={props.isClicked}></div> : null 
    );
};

export default Backdrop;