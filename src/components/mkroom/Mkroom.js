import React, { useState } from 'react';
import axios from "axios";

const Mkroom = () => {
    //방 이름을 저장하는 훅
    const [roomName, setRoomName]  = useState('Default Room Name')
    //방 최대 인원수를 저장하는 훅
    const [maxMember, setMaxMember] = useState(3);
    const incMaxMember = () => {
        setMaxMember(maxMember+1);
    }
    const decMaxMember = () => {
        setMaxMember(maxMember-1);
    }

    //제출버튼을 눌렀을 때 방 정보를 서버 db로 넘겨주는 함수
    const summitClick = () => {
        axios.post(`/api/room`, {
            name: roomName,
            maxPeople: maxMember
        })
        // 완료 후 목록 조회 요청 전송
        .then(() => axios.get(`/api/room`))
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            console.log(response)
            // 입력란을 비우기
            setRoomName('Default Room Name');
            setMaxMember(3);
        });
    }
    return(
        <div className="mkroom">
            <textarea value={roomName} onChange={v => setRoomName(v.target.value)}></textarea>
            <div className="counter">
                <button type="button" onClick={incMaxMember}>+</button>
                {maxMember}
                <button type="button" onClick={decMaxMember}>-</button>
            </div>
            <textarea defaultValue="eating house name"></textarea>
            <div>
                <button className="submitbutton" onClick={() => summitClick()}>Submit</button>
            </div>
        </div>
    );
}

export default Mkroom;