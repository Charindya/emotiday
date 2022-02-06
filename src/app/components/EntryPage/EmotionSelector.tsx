import { AnyCnameRecord } from 'dns';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allReducerType } from '../../reducers/reducers';


export const EmotionSelector: React.FC<any>= (props: {emotionLevel: string}) => {
const primaryEmotion = useSelector((state: allReducerType) => state.emotion);
const dispatch = useDispatch();

    const emotions:Array<string> = ['Angry', 'Sad', 'Neutral', 'Happy', 'Ecstatic'];
    return (
        <>
        <h2>{props.emotionLevel} Emotion Selector</h2>
                {
                    emotions.map((emotion, i) => {
                        return <button key={i} type="button" className="btn btn-primary" onClick={() => dispatch({
                            type: emotion.toUpperCase()
                        })}>{emotion}</button>
                    })
                }
            <p>{primaryEmotion}</p>
            
        </>
        // <EmotionDisplayer/>
    )
}