import React, { useEffect, useState} from "react";
import Dropdown from "./index.jsx";
import "./dropdownStyles.css";

// import countries from "../data/countries.json";
// import data from "../data/animals.json";
import treeJs from "../data/threejsExample.json";

export default function DropdownApp({title,setTitle,setLink}) {
  const [value, setValue] = useState(null) // rmb (null) not (), () mean undefind not same as null
  
  function displayTitle(){
    // if (value == null) setTitle(title="Main")
    // else setTitle(title=JSON.stringify(value["name"]))
    if(value) setTitle(title=(value["name"]))
  }

  function getLink(){
    if(value) setLink(value["link"])
  }

  useEffect(()=>{
    displayTitle()
    getLink()
    // return displayTitle();
    // if(value) setTitle(title=(value["name"]))
    // console.log('MOUNTED');
    // return () => console.log('UNMOUNTED');
  })

  return (
    <>
      <div style={{ width: 200 }}>
        <Dropdown 
          options={treeJs} 
          prompt="Select Theme..."
          label='name'
          id='link' 
          value={value}
          onChange={val => setValue(val)}
        />
        <div style={{opacity: 0.5}}>
          Resule: {title}
        </div>
      </div>
    </>
  );
}