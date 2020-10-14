import React from 'react';
import { If, Then, Else } from '../if';

class UrlItem extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = e =>{
        console.log('body',this.props.body);
        this.props.onClick(this.props.method,this.props.url,this.props.body)
    }
    render() {
        return (
            <div onClick={this.handleClick} className='urlDtl'>
                <p className='urlMethod'>{this.props.method}</p>
                <p className='urlItem'>{this.props.url}</p>
            </div>
        )
    }
}
export default UrlItem;