import React, { useEffect } from 'react';
import './Legend.scss'
import { TextField } from 'shared/ui/TextField';
import { IStates } from 'pages/aboutPage/ui/aboutPage';
import { Names } from 'shared/ui/Radial/Radial';
interface LegendProps{
    sectorStates: IStates
    states:Function,
    sector:string
}
const Legend = ({sectorStates, states, sector }:LegendProps) => {
    const {active, inactive, completed} = sectorStates
    const sum = active + inactive + completed
    useEffect(()=>{

    })
    return (
        <div className='legend'>
            <TextField onclick={states} id={'sum'} text ={Names.sum} value = {sum} sector = {sector}/>
            <TextField onclick={states} id={'active'} text ={Names.active} sector = {sector} value = {active}/>
            <TextField onclick={states} id={'unactive'} text ={Names.inactive} sector = {sector} value = {inactive}/>
            <TextField onclick={states} id={'notended'} text ={Names.completed} sector = {sector} value = {completed}/>
        </div>
    );
};

export default Legend;