import React, { useState } from 'react';
import './Roomitem.css';

const Roomitem = () => {
    const [roomState, setRoomState] = useState({roomname: 'Default', 
maxroom: 10, currentroom: 1})
    return (
        <div className="roomitem">
            <h1>{roomState.roomname}</h1>
            <h2>{roomState.currentroom}/{roomState.maxroom}</h2>
        </div>
    );
}

export default Roomitem;