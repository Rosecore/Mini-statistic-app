import React from 'react';
import Legend from 'widgets/Legend/Legend';
import Radial from 'shared/ui/Radial/Radial';
import ValueHook from 'app/auth/hooks/ValueHook';
import './Dashboard.scss'
import { IData, IStates } from 'pages/aboutPage/ui/aboutPage';

interface DashboardProps {
    name:string,
    sumnum?: IStates
}

const Dashboard = ({name, sumnum}:DashboardProps) => {
    const {sector, handleClick} = ValueHook() 
    const {active, inactive, completed} = sumnum
    const sum = active + inactive + completed
    return (
        <div className='dashboard-page--dashboard-item'>
            <Radial sectorStates = {sumnum} states={handleClick
            } sector = {sector} name = {name}/>
            <Legend sectorStates = {sumnum}  states={handleClick
            } sector = {sector}/>
        </div>
    );
};

export default Dashboard;