import React, { useState } from 'react';
import axios from "axios";
import './Mkroom.css';
import { useNavigate } from 'react-router';

const Mkroom = (props) => {
    const navigate = useNavigate();
    //방 이름을 저장하는 훅
    const [roomName, setRoomName]  = useState('');
    //방 최대 인원수를 저장하는 훅
    const [maxPeople, setMaxPeople] = useState(3);
    //식당을 저장하는 훅
    const [restaurant, setRestaurant] = useState('');

    const incMaxMember = () => {
        setMaxPeople(maxPeople+1);
    }
    const decMaxMember = () => {
        if(maxPeople>2){
            setMaxPeople(maxPeople-1);
        }
        else{
            alert("방 최대 인원수는 2명 이상이어야 합니다")
        }        
    }

    //제출버튼을 눌렀을 때 방 정보를 서버 db로 넘겨주는 함수
    const summitClick = () => {
        if(roomName=='' || restaurant==''){
            alert('방 이름과 식당 이름을 입력해주세요')
        }
        else{
            axios.post("http://ssal.sparcs.org:32132/room/", {
                roomName: roomName,
                roomMaxPeople: maxPeople,
                restaurant: restaurant,
                userId: props.userId,
            })
            // 완료 후 목록 조회 요청 전송
            .then(() => axios.get("http://ssal.sparcs.org:32132/room/"))
            // 응답이 돌아오면 응답 내용으로 목록을 변경
            .then(response => {
                setRoomName("");
                setRestaurant("")
                setMaxPeople(3);
                navigate('/roomlist')
            });
        }
    }
    return(
        <div className="wrapper" style={{height: "95%"}}>
            <div className="mkroom">
                <div>
                    <input className="mkroominput" placeholder="방 이름" value={roomName} onChange={v => setRoomName(v.target.value)}></input>
                </div>
                <div>
                    <input className="mkroominput" placeholder="식당 이름" value={restaurant} onChange={v=>setRestaurant(v.target.value)}></input>
                </div>
                <div>
                    최대 인원수
                </div>
                <div className="counter">
                    <button className="mkroombutton_up" type="button" onClick={incMaxMember}>+</button>
                    {maxPeople}
                    <button className="mkroombutton_down" type="button" onClick={decMaxMember}>-</button>
                </div>
                <div>
                    <button className="submitbutton" onClick={() => summitClick()}>방 생성하기</button>
                </div>
            </div>
        </div>        
    );
}

export default Mkroom;