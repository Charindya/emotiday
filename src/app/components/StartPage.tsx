import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router';

const StartUpDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
`;

var DateDisplay = () => {
    var days:Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months:Array<string> = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const d = new Date();
    var displayTodayDate: string = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' '+ d.getFullYear();

    return (
        <div>
            <p>{displayTodayDate}</p>
        </div>
    )
}

export const StartPage: React.FC = () => {
    const navigate = useNavigate();

    const onStartClick = () => {
        navigate("/entry");
    }
    
    
    return (
    <StartUpDiv>
        <h1>Start Page</h1>
        <DateDisplay/>
        <button type="button" className="btn btn-primary" onClick={onStartClick}>Start</button>
    </StartUpDiv>
    )
}