import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        id:"",
        password:"",
        name:"",
        account:"",
        address:"",
    })
    const summitClick = () => {
        axios.post(`http://ssal.sparcs.org:32132/user/`, {
            userId: userInfo.id,
            userPassword: userInfo.password,
            userName: userInfo.name,
            userAddress: userInfo.address,
            userAccount: userInfo.account,
        })
        .then(() => axios.get("http://ssal.sparcs.org:32132/user/"))
        .then(response => {
            console.log(response)
            setUserInfo({
                id:"",
                password:"",
                name:"",
                account:"",
                address:"",
            })
        })
        .then(()=>{
            navigate('/')
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