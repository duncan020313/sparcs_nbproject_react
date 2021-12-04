import React, { useState , useEffect} from 'react';
import Roomitem from './Roomitem';
import axios from 'axios';

const Roomlist = (props) => {
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
    const joinRoom = (roomItem) => {
        console.log(props.userId)
        if(!props.userId){
            alert("로그인 해 주세요")
        }        
        else if(props.userId in roomItem.roomjoinedPeople){
            alert("이미 입장한 방 입니다")
        }
        else if(roomItem.roomjoinedPeople>=roomItem.maxPeople){
            alert("이미 제한인원이 찬 방입니다")
        }
        else{            
            axios.put(`api/room/${props.userId}/${roomItem._id}/${roomItem.roomNumberofPeople+1}/${false}`)
            .then(()=>axios.get(`api/room`))
            .then(response=>{
                setRoomItems(response.data)
            })
        }        
    }

    let roomitemlist = roomItems.map((v, index)=>(
        <Roomitem
            key={index}
            roomName={v.roomName}
            maxPeople={v.maxPeople}
            restaurant={v.restaurant}
            roomNumberofPeople={v.roomNumberofPeople}
            buttonText={"RemoveRoom"}
            onClick={()=>removeRoom(v)}
            joinText={"Join"}
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