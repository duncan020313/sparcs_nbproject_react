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
                {roomInfo.roomName}
            </h1>
            <h2>
                {roomInfo.roomRestaurant}
            </h2>
            <h3>
                방장 : {roomInfo.masterName}
            </h3>
            <h3>
                방장 주소 : {roomInfo.masterAddress}
            </h3>
            <h3>
                방장 계좌 : {roomInfo.masterAccount}
            </h3>
        </div>
    );
}

export default Masterinfo;