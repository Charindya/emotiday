import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { EmotionSelector } from './EmotionSelector';

const EntryPageDiv = styled.div`
    position: fixed;
    top: 10%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
`;

export const EntryPage: React.FC = () => {
    return (
    <EntryPageDiv>
        <h1>Entry Page</h1>
        <EmotionSelector/>
    </EntryPageDiv>
    )
}