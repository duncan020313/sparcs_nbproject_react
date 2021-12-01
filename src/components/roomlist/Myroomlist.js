import React, { useState , useEffect} from 'react';
import Roomitem from './Roomitem';
import axios from 'axios';

const Myroomlist = (props) => {
    const [roomItems, setRoomItems] = useState([])
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/room/${props.userId}`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setRoomItems(response.data);
        });
    }, []);
    const quitRoom = (roomItem) => {
        console.log(roomItem)
        if(roomItem.roomNumberofPeople===1){
            
            axios.delete(`api/room/${roomItem._id}`)
            .then(()=>axios.get(`api/room/${props.userId}`))
            .then(response => {
                setRoomItems(response.data);
            })
        }else{
            axios.delete(`api/room/${props.userId}/${roomItem._id}/${roomItem.roomNumberofPeople-1}`)
            .then(()=>axios.get(`/api/room/${props.userId}`))
            .then(response => {
                setRoomItems(response.data);
            })
        }        
    };
    return(
        <div className="roomlist">
            {roomItems.map((v, index)=>(
            <Roomitem
                key={index}
                roomName={v.roomName}
                maxPeople={v.maxPeople}
                roomNumberofPeople={v.roomNumberofPeople}
                onDeleteClick={()=>quitRoom(v)}/>
            ))}
        </div>
    )
}

export default Myroomlist;