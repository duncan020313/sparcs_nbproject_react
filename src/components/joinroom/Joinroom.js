import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './Joinroom.css'
import Useritem from './Useritem';
import Masterinfo from './Masterinfo';
import axios from 'axios';
import Masteritem from './Masteritem';

const Joinroom = (props) => {
    const location = useLocation();
    const roomItem = location.state.roomItem
    const [masterInfo, setMasterInfo] = useState([]);
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        axios.get(`/api/user/${roomItem.masterUserId}`)
        .then(response => {
            const newinfo = [...response.data]
            setMasterInfo(newinfo);
        })
        .then(()=>axios.get(`/api/room/getuserlist/${roomItem.roomjoinedPeople}`))
        .then(response=>{
            const newinfo = [...response.data]
            setUserList(newinfo)
        });
    }, [])
    useEffect(()=>{
        masterinfo = masterInfo.map((v)=><Masterinfo
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

        userlist = userList.map((v)=>
        (v._id==roomItem.masterUserId) ? 
            <Masteritem
            key={v._id}
            userName={v.userName}/>:
            <Useritem
            key={v._id}
            setRoomMaster={()=>setRoomMaster(v)}
            userName={v.userName}/>
        )
        console.log(123)
    }, [masterInfo, userList])
    const setRoomMaster = (v) => {
        axios.put(`/api/room/${v._id}/${roomItem._id}`)
        .then(()=>axios.get(`/api/user/${roomItem.masterUserId}`))
        .then(response => {
            const newinfo = [...response.data]
            setMasterInfo(newinfo);
        })
        .then(()=>axios.get(`/api/room/getuserlist/${roomItem.roomjoinedPeople}`))
        .then(response=>{
            const newinfo = [...response.data]
            setUserList(newinfo)
        });
    }
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

    let userlist = userList.map((v)=>
    (v._id==roomItem.masterUserId) ? 
        <Masteritem
        key={v._id}
        userName={v.userName}/>:
        <Useritem
        key={v._id}
        setRoomMaster={()=>setRoomMaster(v)}
        userName={v.userName}/>
    )
    return(
        <div className="joinroomwrapper">
            <div className="joinroom">
                <div>
                    {masterinfo}
                </div>
                <div>
                    {userlist}
                </div>
            </div>            
        </div>
    )
}

export default Joinroom;