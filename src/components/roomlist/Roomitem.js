import React, { useState } from 'react';
import './Roomitem.css';
import axios from 'axios';

const Roomitem = (props) => {
    const [roomState, setRoomState] = useState({roomName: props.roomName, 
        maxPeople: props.maxPeople, roomNumberofPeople: props.roomNumberofPeople})
    return (
        <div className="roomitem">
            <h1>{roomState.roomName}</h1>
            <h2>{roomState.roomNumberofPeople}/{roomState.maxPeople}</h2>
            <div>
                <button onClick={props.onDeleteClick}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default Roomitem;