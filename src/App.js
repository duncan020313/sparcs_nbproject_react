import React, { useState } from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/home/Home.js";
import Joinroom from "./components/joinroom/Joinroom.js";
import Mkroom from "./components/mkroom/Mkroom.js";
import Roomlist from "./components/roomlist/Roomlist.js";
import Login from "./components/login/Login.js";
import CreateAccount from "./components/login/CreateAccount.js";
import Myroomlist from "./components/roomlist/Myroomlist.js";
import Navbar from "./components/navbar/Navbar.js";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(false);
  return (
    <div className = "App" style={{height:"100%"}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact={true} path = "/" element={<Login
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
          <Route exact={true} path = "/home" element={<Home
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
          <Route exact={true} path = "/createaccount" element={<CreateAccount
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
          <Route exact={true} path = "/mkroom" element={<Mkroom
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
          <Route exact={true} path = "/roomlist" element={<Roomlist
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
          <Route exact={true} path = "/myroomlist" element={<Myroomlist
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>  
          <Route exact={true} path = "/joinroom" element={<Joinroom
            setId = {(id)=>{setUserId(id)}}
            userId = {userId}
          />}></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
