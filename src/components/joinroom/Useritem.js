import React, { useState } from 'react';

const Useritem = (props) => {
    return (
        <div className="useritem">
            {props.userName}
            <button onClick={()=>props.setRoomMaster}>방장 임명</button>
        </div>
    );
}

export default Useritem;