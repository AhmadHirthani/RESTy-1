import React from 'react';
import ReactJson from 'react-json-view'

const Result = (props) => {
    if(props.result){
        return (
            <div id='resultBoard'>
                <ReactJson src={props.result} theme='Adventure Time'/>
            </div>
        )
    }else{
        return (
            <div id='resultBoard'>
            </div>
        )
    }
};
export default Result;
