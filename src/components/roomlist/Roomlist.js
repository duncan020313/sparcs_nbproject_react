import React, { useState , useEffect} from 'react';
import Roomitem from './Roomitem';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Roomlist = (props) => {
    const navigate = useNavigate();
    const [roomItems, setRoomItems] = useState([])
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`http://ssal.sparcs.org:32132/room`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setRoomItems(response.data);
        });
    }, []);
    const removeRoom = (roomItem) => {
        axios.delete(`http://ssal.sparcs.org:32132/room/${roomItem._id}`)
        .then(()=>axios.get(`http://ssal.sparcs.org:32132/room`))
        .then(response => {
            setRoomItems(response.data);
        })
    };
    const joinRoom = (roomItem) => {
        if(!props.userId){
            alert("로그인 해 주세요")
        }        
        else if(roomItem.roomjoinedPeople.includes(props.userId)){
            alert("이미 입장한 방 입니다")
        }
        else if(roomItem.roomjoinedPeople>=roomItem.maxPeople){
            alert("이미 제한인원이 찬 방입니다")
        }
        else{            
            axios.put(`http://ssal.sparcs.org:32132/room/${props.userId}/${roomItem._id}/${roomItem.roomNumberofPeople+1}/${false}`)
            .then(()=>axios.get(`api/room`))
            .then(response=>{
                setRoomItems([...response.data])
            })
            .then(()=>axios.get(`http://ssal.sparcs.org:32132/room/findoneroom/${roomItem._id}`))
            .then(response=>{
                navigate(`/joinroom`, {
                    state : {
                        roomItem: response.data,
                    }
                })
            })
        }        
    }

    let roomitemlist = roomItems.map(v=>(
        <Roomitem
            key={v._id}
            roomName={v.roomName}
            maxPeople={v.maxPeople}
            restaurant={v.restaurant}
            roomNumberofPeople={v.roomNumberofPeople}
            buttonText={"방 삭제하기"}
            onClick={()=>removeRoom(v)}
            joinText={"방 입장하기"}
            join={()=>joinRoom(v)}/>
        )
    )
    return(
        <div className="roomlist">
            {roomitemlist}
        </div>
    )
}

export default Roomlist;