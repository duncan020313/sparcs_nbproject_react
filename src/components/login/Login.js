import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const summitClick = () => {
        axios.get(`/api/user/${id}/${password}`)
        .then(response => {            
            console.log(response.data)
            if(response.data.length===0){
                alert("Login Failed")
            }else{
                alert("Login Succeed")                
            }
            setId("")
            setPassword("")
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