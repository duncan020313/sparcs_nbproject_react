import axios from 'axios';
import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const summitClick = () => {
        axios.get(`/api/user/${id}/${password}`)
        .then(response => {            
            if(response.data.length!==1){
                alert("Login Failed")
            }else{
                alert("Login Succeed")
                setId("")
                setPassword("")
                props.setId(response.data[0]._id)
                navigate({
                    pathname:`/roomlist`,
                })                
            }
        })
    }
    return(
        <div className="login">
            <div>
                ID:<input value = {id} onChange={v => setId(v.target.value)}></input>
            </div>
            <div>
                PASSWORD:<input type="password" value = {password} onChange={v => setPassword(v.target.value)}></input>
            </div>
            <button type="submit" onClick={()=>summitClick()}>Button</button>
        </div>
    )
}

export default Login;