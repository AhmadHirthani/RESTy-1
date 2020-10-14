import React from 'react';
import './loader.scss'
import { If, Then, Else } from '../if';

class Loader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <If condition={this.props.loading}>
                <Then>
                    <div id="mainContainer">
                        <div id="container">
                            <div id="yellow"></div>
                            <div id="red"></div>
                            <div id="blue"></div>
                            <div id="violet"></div>
                        </div>
                    </div>
                </Then>
                <Else>
                    <div>

                    </div>
                </Else>
            </If>
        )
    }
}
export default Loader;