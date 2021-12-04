import React, { useState } from 'react';
import './Roomitem.css';


const Roomitem = (props) => {
    const [roomState, setRoomState] = useState({roomName: props.roomName, 
        maxPeople: props.maxPeople, restaurant: props.restaurant, roomNumberofPeople: props.roomNumberofPeople})
    return (
        <div className="roomitem">
            <div className="leftbox">
                <h1 className="roomtext">{roomState.roomName}</h1>
                <h2 className="roomtext">{roomState.restaurant}</h2>
            </div>
            <div className="midbox">
                <h1>{roomState.roomNumberofPeople}/{roomState.maxPeople}</h1>                
            </div>
            <div className="rightbox">
                <button className="roombutton_del" onClick={props.onClick}>
                    {props.buttonText}
                </button>
                <button className="roombutton_join" onClick={props.join}>
                    {props.joinText}
                </button>
            </div>
        </div>
    );
}

export default Roomitem;