import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/home/Home.js";
import Joinroom from "./components/joinroom/Joinroom.js";
import Mkroom from "./components/mkroom/Mkroom.js";
import Roomlist from "./components/roomlist/Roomlist.js";

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <h1>Home</h1>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mkroom">Home</Link>
          </li>
          <li>
            <Link to="/roomlist">Home</Link>
          </li>
          <li>
            <Link to="/joinroom">Home</Link>
          </li>
        </ol>
        <Routes>
        <Route exact={true} path = "/" element={<Home/>}></Route>
          <Route exact={true} path = "/mkroom" element={<Mkroom/>}></Route>
          <Route exact={true} path = "/roomlist" element={<Roomlist/>}></Route>  
          <Route exact={true} path = "/joinroom" element={<Joinroom/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
