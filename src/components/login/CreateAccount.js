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
        <div className="wrapper">
            <div className="login">
                <div className="iddiv">
                    <input placeholder="ID" className="idinput" value = {userInfo.id} onChange={(v)=>
                        setUserInfo({...userInfo, id:v.target.value})}></input>
                </div>
                <div className="iddiv">
                    <input placeholder="PASSWORD" className="idinput" value = {userInfo.password} onChange={(v)=>
                        setUserInfo({...userInfo, password:v.target.value})}></input>
                </div>
                <div className="iddiv">
                    <input placeholder="NAME" className="idinput" value = {userInfo.name} onChange={(v)=>
                        setUserInfo({...userInfo, name:v.target.value})}></input>
                </div>
                <div className="iddiv">
                    <input placeholder="ADDRESS" className="idinput" value = {userInfo.address} onChange={(v)=>
                        setUserInfo({...userInfo, address:v.target.value})}></input>
                </div>
                <div className="iddiv">
                    <input placeholder="ACCOUNT" className="idinput" value = {userInfo.account} onChange={(v)=>
                        setUserInfo({...userInfo, account:v.target.value})}></input>
                </div>
                <div>
                    <button className="loginbutton" type="submit" onClick={()=>summitClick()}>Create Account</button>
                </div>
            </div>             
        </div>
    )
}

export default CreateAccount;