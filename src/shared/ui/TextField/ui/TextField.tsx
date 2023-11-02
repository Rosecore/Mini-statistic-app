import ValueHook from 'app/auth/hooks/ValueHook';
import React, { useEffect } from 'react';
import './TextField.scss'
interface TextFieldProps{
    text:string,
    id: string,
    value: number,
    onclick:CallableFunction,
    sector: string
}

const TextField = ({text, id, value, onclick, sector}:TextFieldProps) => {
    return (
        <div id = {id} className={id===sector?'bold':'base'} onClick={(e:any)=>onclick(e.target.id)}>
            {text},{value}
        </div>
    );
};

export default TextField;