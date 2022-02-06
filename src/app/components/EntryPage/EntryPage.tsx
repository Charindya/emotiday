import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { EmotionSelector } from './EmotionSelector';
import { allReducerType } from '../../reducers/reducers';

import { useSelector } from 'react-redux';


const EntryPageDiv = styled.div`
height:300px;
position:relative;
background-color:#fff;
display:block;
border-radius:4px;
text-align:center;
margin:2%;
`;

export const EntryPage: React.FC = () => {
const primaryEmotion = useSelector((state: allReducerType) => state.emotion);
    
    return (
    <EntryPageDiv>
        <h1>Entry Page</h1>
        <EmotionSelector emotionLevel="Primary" primaryEmotionReducer={primaryEmotion}/>
        <EmotionSelector emotionLevel="Secondary"/>
    </EntryPageDiv>
    )
}