import React, { useState , useEffect} from 'react';
import Roomitem from './Roomitem';
import axios from 'axios';

const Roomlist = () => {
    const [roomItems, setRoomItems] = useState([])
        useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/room`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setRoomItems(response.data);
        });
    }, []);
    const removeRoom = (roomItem) => {
        axios.delete(`api/room/${roomItem._id}`)
        .then(()=>axios.get(`api/room`))
        .then(response => {
            setRoomItems(response.data);
        })
    };
    return(
        <div className="roomlist">
            {roomItems.map((v)=>(
            <Roomitem
                key={v.id}
                roomName={v.roomName}
                maxPeople={v.maxPeople}
                roomNumberofPeople={v.roomNumberofPeople}
                onDeleteClick={()=>removeRoom(v)}/>
            ))}
        </div>
    )
}

export default Roomlist;