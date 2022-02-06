import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
 
const dispatchEmotion = () => {
    
}

export const EmotionSelector: React.FC= () => {
    const emotions:Array<string> = ['Angry', 'Sad', 'Neutral', 'Happy', 'Ecstatic'];
    console.log(emotions.length)
    return (
        <>
        <h1>Emotion Selector</h1>
                {
                    emotions.map((emotion, i) => {
                        return <button key={i} type="button" className="btn btn-primary" onClick={dispatchEmotion}>{emotion}</button>
                    })
                }
        </>
        // <EmotionDisplayer/>
    )
}