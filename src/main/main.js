import React from 'react';
import './form.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'GET',
            url: '',
            hits: []
        }
    }
    handleMethodclick = e => {
        e.preventDefault();
        let method = e.target.value;
        // update state.words
        this.setState({ method }); // re-render 
    }
    handleGoClick = e => {
        e.preventDefault();
        // this.state.hits.push(<li key={this.state.hits.length+1}>{`${this.state.method} : ${this.state.url}`}</li>);
        this.state.hits.push(<li key={this.state.hits.length + 1}>
            <div className='urlDtl'>
                <p className='urlMethod'>{this.state.method}</p>
                <p className='urlItem'>{this.state.url}</p>
            </div>
        </li>);
        let hits = this.state.hits
        // console.log(this.state.hits);
        this.setState({ hits })
    }
    handleInput = e => {
        let url = e.target.value
        this.setState({ url })
    }
    render() {
        return (
            <div>
                <form>
                    <div id='urlPanel'>
                        <label htmlFor='url'>URL :{this.state.method} </label>
                        <input onChange={this.handleInput} className='url' name='url' />
                        <button onClick={this.handleGoClick}>Go !</button>
                    </div>
                    <div id='requisPanel'>
                        <button value='GET' onClick={this.handleMethodclick}>GET</button>
                        <button value='POST' onClick={this.handleMethodclick}>POST</button>
                        <button value='PUT' onClick={this.handleMethodclick}>PUT</button>
                        <button value='DELETE' onClick={this.handleMethodclick}>DELETE</button>
                    </div>
                </form>
                <div id='resultBoard'>
                <ul>{this.state.hits}</ul>
                </div>
            </div>
        )
    }
}

export default Main;