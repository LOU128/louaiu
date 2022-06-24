import React from "react";

import Home  from "./Home";
import Editor from "./Editor";
import "./styles/main.scss";


import { BrowserRouter as Router, 
   Route,Routes } from "react-router-dom";
//import { useDispatch } from "react-redux";

//import { pageLoad } from "./redux/actions/pageAction";

function App() {
 
  return (
  <div className="App"> 
 <Routes>
    <Route path ="/aa" element={<Home/>}/>
    <Route path ="/editor/:pageId" element={<Editor/>}/>
   </Routes>
 
   </div>
  );
}

export default App;
