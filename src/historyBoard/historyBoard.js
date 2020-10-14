import React from 'react';
import './historyBoard.scss'
class HistoryBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='historyBoard'>
                <ul>{this.props.hits}</ul>
            </div>
        );
    }
}
export default HistoryBoard;
