import React from 'react';
import { If, Then, Else } from '../if';
// import ReactJson from 'react-json-view'
class InputBody extends React.Component {
    constructor(props) {
        super(props)
    }
    handlebodyChange = e => {
        this.props.body(e.target.value)
    }
    render() {
        return (
            <div id='bodyBoard'>
                <If condition={Object.keys(this.props.text).length > 0}>
                    <Then>
                        <textarea onChange={this.handlebodyChange} value={this.props.text}></textarea>
                    </Then>
                    <Else>
                        <textarea onChange={this.handlebodyChange}></textarea>
                    </Else>
                </If>
            </div>
        )
    }
}
// const InputBody = (props) => {
//     if(props.result){
//         return (
//             <div id='bodyBoard'>
//                 <textarea></textarea>
//             </div>
//         )
//     }else{
//         return (
//             <div id='bodyBoard'>
//                 <textarea></textarea>
//             </div>
//         )
//     }
// };
export default InputBody;
