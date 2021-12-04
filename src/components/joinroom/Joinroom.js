import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './Joinroom.css'
import Masterinfo from './Masterinfo';
import axios from 'axios';

const Joinroom = () => {
    const location = useLocation();
    const roomItem = location.state.roomItem
    const [masterInfo, setMasterInfo] = useState([]);
    useEffect(()=>{
        axios.get(`/api/user/${roomItem.masterUserId}`)
        .then(response => {
            setMasterInfo(response.data);
        });
    }, [])
    let masterinfo = masterInfo.map((v)=><Masterinfo
        key={v._id}
        roomName={roomItem.roomName}
        maxPeople={roomItem.maxPeople}
        roomNumberofPeople={roomItem.roomNumberofPeople}
        roomJoinedPeople={roomItem.roomjoinedPeople}
        roomRestaurant={roomItem.restaurant}
        userName={v.userName}
        userAddress={v.userAddress}
        userAccount={v.userAccount}
    />)
    return(
        <div className="joinroom">
            <div>
                {masterinfo}
            </div>            
        </div>
    )
}

export default Joinroom;