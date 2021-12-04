import React, { useState } from 'react';
import "./Masteritem.css";

const Masteritem = (props) => {
    return (
        <div className="masteritem">
            <div className="mastername">
                {props.userName}
            </div>
        </div>
    );
}

export default Masteritem;