import React, { useEffect, useState } from 'react';

const Masterinfo = (props) => {
    const [roomInfo, setRoomInfo] = useState({roomName:props.roomName, 
        roomRestaurant: props.roomRestaurant,
        masterName:props.userName,
        masterAddress:props.userAddress,
        masterAccount:props.userAccount,
    });
    return (
        <div>
            <h1>
                Room Name : {roomInfo.roomName}
            </h1>
            <h2>
                Restaurant : {roomInfo.roomRestaurant}
            </h2>
            <h3>
                Master Name : {roomInfo.masterName}
            </h3>
            <h3>
                Master address : {roomInfo.masterAddress}
            </h3>
            <h3>
                Master account : {roomInfo.masterAccount}
            </h3>
        </div>
    );
}

export default Masterinfo;