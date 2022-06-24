
import React, {useState, useEffect } from "react";
import grapesjs from "grapesjs"
import gjsPresetWebpage from "grapesjs-blocks-basic";
import { useParams } from "react-router-dom";


const Editor = () => {
    const[editor, setEditor] = useState(null);
const {pageId}=useParams();
console.log("pageId:>>",pageId);


    useEffect(()=>{
    const editor = grapesjs.init({
    container: "#editor",
    plugins:[gjsPresetWebpage],
    pluginsOpts: {
      gjsPresetWebpage:{},
    },
    });
  setEditor(editor);
  },[]);

return ( 
<div className="app">
<div id ="editor"></div>
</div>
);


}; 
export default Editor ; 

