import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
    const [userInfo, setUserInfo] = useState({
        id:"",
        password:"",
        name:"",
        account:"",
        address:"",
    })
    const summitClick = () => {
        axios.post(`/api/user/`, {
            userId: userInfo.id,
            userPassword: userInfo.password,
            userName: userInfo.name,
            userAddress: userInfo.account,
            userAccount: userInfo.address,
        })
        .then(() => axios.get("/api/user/"))
        .then(response => {
            console.log(response)
            setUserInfo({
                id:"",
                password:"",
                name:"",
                account:"",
                address:"",
            })
        });
    }
    return(
        <div className="createaccount">
            <div>
                ID:<input value = {userInfo.id} onChange={(v)=>
                    setUserInfo({...userInfo, id:v.target.value})}></input>
            </div>
            <div>
                PASSWORD:<input value = {userInfo.password} onChange={(v)=>
                    setUserInfo({...userInfo, password:v.target.value})}></input>
            </div>
            <div>
                NAME:<input value = {userInfo.name} onChange={(v)=>
                    setUserInfo({...userInfo, name:v.target.value})}></input>
            </div>
            <div>
                ADDRESS:<input value = {userInfo.address} onChange={(v)=>
                    setUserInfo({...userInfo, address:v.target.value})}></input>
            </div>
            <div>
                ACCOUNT:<input value = {userInfo.account} onChange={(v)=>
                    setUserInfo({...userInfo, account:v.target.value})}></input>
            </div>
            <div>
                <button type="submit" onClick={()=>summitClick()}>Create Account</button>
            </div>                
        </div>
    )
}

export default CreateAccount;