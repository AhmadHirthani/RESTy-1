import React from 'react';
import ReactJson from 'react-json-view'
import { If, Then, Else } from '../if';

const Result = (props) => {
    return (
        <If condition={props.result}>
            <Then>
                <div id='resultBoard'>
                    <ReactJson src={{ response: props.result }} theme='monokai' />
                </div>
            </Then>
            <Else>
                <div>

                </div>
            </Else>
        </If>
    );
    // try {
    //     if (props.result) {
    //         return (
    //             <div id='resultBoard'>
    //                 <ReactJson src={{ response: props.result }} theme='Adventure Time' />
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div id=''>
    //             </div>
    //         )
    //     }
    // } catch (error) {
    //     return (
    //         <div id='resultBoard'>
    //             {props.result}
    //         </div>
    //     )
    // }
};
export default Result;
