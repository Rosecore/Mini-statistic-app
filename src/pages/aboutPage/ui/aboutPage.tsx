import React, { useEffect, useState } from "react";
import Dashboard from "widgets/dashboard/ui/Dashboard";
import './aboutPage.scss'
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "widgets/loginButton/ui/LoginButton";
export interface IStates {
    active: number
    inactive:number
    completed:number
}
export interface IData{
    scenarios:IStates
    lists:IStates
    dialogs:IStates
}
export interface IDashboard{
    dashboard:IData
}

const AboutPage = () => {
    const [dashboardData, setDashboardData] = useState<IDashboard>()
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const options = {
		method: 'POST',
		url: 'https://graphql-demo.dev.aicall.ru/graphql',
		headers: {
			'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY)}`
		},
		data: {
			query: `query{
                dashboard{
                  scenarios{
                    active
                    inactive
                    completed
                  }
                  lists{
                    active
                    inactive
                    completed
                  }
                  dialogs{
                    active
                    inactive
                    completed
                  }
                }  
              }`
		}
	};
    useEffect(()=>{
        if (!isLoaded){
        axios
         .request(options)
        .then((response) => {
            setDashboardData(response.data.data)
        }).then (()=>{
            setLoaded(true)
        })
        .catch(function (error) {
            setDashboardData(error)
            setLoaded(false)
        });  
    }
    })
       
    return (
        <div>
            {isLoaded && <div className="dasboard-page">
            <Dashboard name= "Сценарии" sumnum = {dashboardData.dashboard.scenarios}/>
            <Dashboard name= 'Списки' sumnum = {dashboardData.dashboard.lists}/>
            <Dashboard name= 'Диалоги' sumnum = {dashboardData.dashboard.dialogs}/>
            </div>
            }
        </div>
    );
};

export default AboutPage;
