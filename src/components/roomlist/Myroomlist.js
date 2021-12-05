import React, { useState , useEffect} from 'react';
import Roomitem from './Roomitem';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Myroomlist = (props) => {
    const [roomItems, setRoomItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`http://ssal.sparcs.org:32132/room/${props.userId}`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setRoomItems(response.data);
        });
    }, []);
    const quitRoom = (roomItem) => {
        if(roomItem.roomNumberofPeople===1){
            axios.delete(`http://ssal.sparcs.org:32132/room/${roomItem._id}`)
            .then(()=>axios.get(`http://ssal.sparcs.org:32132/room/${props.userId}`))
            .then(response => {
                setRoomItems(response.data);
            })
        }else{
            axios.put(`http://ssal.sparcs.org:32132/room/${props.userId}/${roomItem._id}/${roomItem.roomNumberofPeople-1}/${true}`)
            .then(()=>axios.get(`http://ssal.sparcs.org:32132/room/${props.userId}`))
            .then(response => {
                console.log(response.data)
                setRoomItems(response.data);
            })
        }
    };
    const roomInfo = (roomItem) => {
        navigate(`/joinroom`, {
            state : {
                roomItem: roomItem,
            }
        })
    }
    return(
        <div className="roomlist">
            {roomItems.map(v=>(
            <Roomitem
                key={v._id}
                roomName={v.roomName}
                maxPeople={v.maxPeople}
                restaurant={v.restaurant}
                roomNumberofPeople={v.roomNumberofPeople}
                buttonText={"방 나가기"}
                joinText={"방 정보보기"}
                join={()=>roomInfo(v)}
                onClick={()=>quitRoom(v)}/>
            ))}
        </div>
    )
}

export default Myroomlist;