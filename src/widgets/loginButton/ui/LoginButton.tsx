import React from 'react';
import axios from 'axios';
import './LoginButtons.scss'
import AuthHook from 'app/auth/hooks/AuthHook';
interface UserInfProps {
    username:string,
    password: string
}
export const USER_LOCALSTORAGE_KEY = 'user';

const LoginButton = ({username, password}:UserInfProps) => {
    const {setAuth} = AuthHook()
    const options = {
		method: 'POST',
		url: 'https://graphql-demo.dev.aicall.ru/graphql',
		headers: {
			'content-type': 'application/json'
		},
		data: {
			query: `mutation{login(username:"${username}" password: "${password}"){token}}`
		}
	};
    const onLoginClick = (event:Event) =>{
        event.preventDefault()
        axios
    .request(options)
    .then(function (response) {
        setAuth(true)
        localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.data.login.token)
    })
    .catch(function (error) {
        console.error(error);
    });   
}
    return (
       <button className="loginButton" onClick={(e:any)=>onLoginClick(e)}></button>
    );
};

export default LoginButton;