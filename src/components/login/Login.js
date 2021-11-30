import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const summitClick = () => {
        axios.get(`/api/user/${id}/${password}`)
        .then(response => {
            console.log(response)
        })
    }
    return(
        <div className="login">
            <form>
                <div>
                    ID:<input value = {id} onChange={v => setId(v.target.value)}></input>
                </div>
                <div>
                    PASSWORD:<input type="password" value = {password} onChange={v => setPassword(v.target.value)}></input>
                </div>
                <button type="submit" onClick={()=>summitClick}>Button</button>
            </form>
        </div>
    )
}

export default Login;