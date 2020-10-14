import { findByTestId } from '@testing-library/react';
import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './form.scss'
import ReactJson from 'react-json-view'
import Result from './results';
import InputBody from './inputBody';
import Loader from '../loader'
import UrlItem from '../urlItem/urlItem'
import HistoryBoard from '../historyBoard/historyBoard'
import { Route, Switch } from 'react-router-dom'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'GET',
            url: '',
            hits: [],
            result: '',
            body: {},
            loading: false
        }
    }

    /**
     * 
     * @param {*} method 
     * @param {*} url 
     * @param {*} data 
     */
    async hitRequist(method, url, data) {
        this.setState({ loading: true });
        console.log('update1 :', this.state.loading);
        // Default options are marked with *
        let req = {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }

        //check if the requist has body or if it is a GET requist
        if (Object.keys(data).length > 0 && method != 'GET') {
            console.log('klfklsnmdlfjnsjfnbdklfnsdlknflsdnfls', Object.keys(data).length);
            req.body = data
        }

        console.log(method, url + data);
        const response = await fetch(url, req);
        console.log('response.json() >>> ', response);
        return response; // parses JSON response into native JavaScript objects
    }

    /**
     * 
     * @param {*} e 
     */
    handleMethodclick = e => {
        e.preventDefault();
        let method = e.target.value;
        // update state.words
        this.setState({ method }); // re-render 
    }

    /**
     * 
     * @param {*} e 
     */
    handleUrlClick = (method, url, body) => {
        console.log('00000000', url);
        this.setState({ method, url, body })
    }
    handleGoClick = async e => {
        e.preventDefault();
        // this.state.hits.push(<li key={this.state.hits.length + 1}>
        //     <div className='urlDtl'>
        //         <p className='urlMethod'>{this.state.method}</p>
        //         <p className='urlItem'>{this.state.url}</p>
        //     </div>
        // </li>);
        console.log('this.state.body', this.state.body);
        this.state.hits.push(<li key={this.state.hits.length + 1}>
            <UrlItem reFillData={this.reFillRequist} onClick={this.handleUrlClick} method={this.state.method} url={this.state.url} body={this.state.body} />

        </li>);
        let hits = this.state.hits
        this.setState({ hits })

        this.hitRequist(this.state.method, this.state.url, this.state.body).then(result => {
            try {
                console.log('before', result);
                result.json().then(result => {
                    console.log('after', result);
                    this.setState({ result, loading: false })
                    console.log('update2 :', this.state.loading);
                    let hitsHistory = JSON.parse(localStorage.getItem('hitsHistory'));
                    hitsHistory.push({ method: this.state.method, url: this.state.url, body: this.state.body })
                    localStorage.setItem('hitsHistory', JSON.stringify(hitsHistory));
                })
            } catch (error) {
                console.log(error);
            }
        })
    }

    /**
     * 
     * @param {*} e 
     */
    handleInput = e => {
        let url = e.target.value
        this.setState({ url })
    }

    /**
     * 
     * @param {*} body 
     */
    handleBody = (body) => {
        this.setState({ body })
    }
    /**
     * {
                "name": "ssssosososososos3",
                "password": "1234",
                "email": "user@11",
                "nationalNo": 123,
                "payPal": "paypal",
                "dob": "2020-01-01T22:00:00.000Z",
                "familyCount": 4,
                "socialStatus": "single",
                "income": 200,
                "healthStatus": "good",
                "healthDesc": "good",
                "expencsies": 400,
                "isActive":1
            }
     */

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('hitsHistory')));
        if (!JSON.parse(localStorage.getItem('hitsHistory'))) {
            localStorage.setItem('hitsHistory', JSON.stringify([]))
        }
        let hits = JSON.parse(localStorage.getItem('hitsHistory')).map((item, i) => {
            return (
                <UrlItem reFillData={this.reFillRequist} key={i} onClick={this.handleUrlClick} method={item.method} url={item.url} body={item.body} />
            )
            // console.log('-----------',item);

        })

        console.log('after render ==== >', hits);
        this.setState({ hits })

    }

    reFillRequist = (method,url,body) =>{
        this.setState({method,url,body});
    }

    /**
     * 
     */
    render() {
        return (
            <div id='main'>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <form>
                                <div id='urlPanel'>
                                    <label htmlFor='url'>URL :{this.state.method} </label>
                                    <input value={this.state.url} onChange={this.handleInput} className='url' name='url' />
                                    <button onClick={this.handleGoClick}>Go !</button>
                                </div>
                                <div id='requisPanel'>
                                    <button value='GET' onClick={this.handleMethodclick}>GET</button>
                                    <button value='POST' onClick={this.handleMethodclick}>POST</button>
                                    <button value='PUT' onClick={this.handleMethodclick}>PUT</button>
                                    <button value='DELETE' onClick={this.handleMethodclick}>DELETE</button>
                                </div>
                            </form>
                            <div id='mainDivs'>
                                <InputBody text={this.state.body} body={this.handleBody} />
                                <div id='board'>
                                    <HistoryBoard hits={this.state.hits} />
                                    {/* <div id='urltBoard'>
                                <ul>{this.state.hits}</ul>
                            </div> */}
                                    <Result result={this.state.result} />
                                </div>

                            </div>
                        </div>
                        <Loader loading={this.state.loading}></Loader>
                    </Route>
                    <Route exact path="/history">
                        <HistoryBoard hits={this.state.hits} />
                    </Route>
                    <Route exact path="/help">
                        <div>
                            <h1>Ahmad Shela</h1>
                            <p> if you have any quastions contact me on :</p>
                            <ul>
                                <li><a href="https://github.com/AhmedShela">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/ahmad-shela/">LinkedIn</a></li>
                                <li><a href="">Facebook</a></li>
                            </ul>
                        </div>
                    </Route>
                    <Route>404 Page Not Found!</Route>
                </Switch>

            </div>
        )
    }
}

export default Main;