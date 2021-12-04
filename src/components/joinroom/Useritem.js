import React, { useState } from 'react';
import "./Useritem.css";

const Useritem = (props) => {
    return (
        <div className="useritem">
            <div className="username">
                {props.userName}
            </div>
            <button className="setmasterbutton" onClick={props.setRoomMaster}>방장 임명</button>
        </div>
    );
}

export default Useritem;