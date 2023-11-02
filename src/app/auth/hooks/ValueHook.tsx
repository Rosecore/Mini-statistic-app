import { useContext, useEffect, useState } from "react"
import React from 'react';
import ContextAuth from "../provider/contextProvider";

const ValueHook = () => {
    const [sector, setClicked] = useState("sum")
    const handleClick = (sectorName:string)=>{
        console.log(sectorName)
        setClicked(sectorName)
    }
  return (
    {sector, handleClick}
  );
};

export default ValueHook;