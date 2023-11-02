import React, { useCallback, useState } from "react";
import { LoginButton } from "widgets/loginButton";
import './mainPage.scss'
import axios from 'axios'
import { register } from "module";

const MainPage = () =>{ 
    const [userName, setUsername] = useState('')
    const [userPassword, setPassword] = useState('')
    return (<div className="mainDiv">
        <div className="formdiv">
        <form className="formdiv2">  
          <input className="input2" type="text" onChange={e => setUsername(e.target.value)} placeholder="enter username" /> 
          <input className="input2" type="text" onChange={e => setPassword(e.target.value)} placeholder="enter password" /> 
          <LoginButton username= {userName} password={userPassword}/>
        </form>  
        </div>
    </div>)
}

export default MainPage