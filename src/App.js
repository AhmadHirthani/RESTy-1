import React from 'react';
import Main from './main/main';
import Footer from './footer/footer';
import Header from './header/header';
import {BrowserRouter} from 'react-router-dom'
// import './appStyle/header.scss'
// const Header = () => {
//   return (
//     <header>
//       <style>@import './appStyle/header.scss';</style>
//       <h1>React Demo!!!</h1>
//     </header>
//   )
// };

// const Footer = () => <footer>&copy 2020 401d4</footer>

//Main
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       method : 'GET',
//       url : '',
//       hits:[]
//     }
//   }
//   handleMethodclick = e => {
//     let method = e.target.value;
//     // update state.words
//     this.setState({method}); // re-render 
//   }
//   handleGoClick = e => {
//   // this.state.hits.push(<li key={this.state.hits.length+1}>{`${this.state.method} : ${this.state.url}`}</li>);
//   this.state.hits.push(<li key={this.state.hits.length+1}>
//     <div>
//   <p id='urlMethod'>{this.state.method}</p>
//   <p id='urlItem'>{this.state.url}</p>
//     </div>
//   </li>);
//   let hits = this.state.hits
//     // console.log(this.state.hits);
//     this.setState({hits})
//   }
//   handleInput = e =>{
//     let url = e.target.value
//     this.setState({url})
//   }
//   render() {
//     return (
//       <div>
//         <label>URL :{this.state.method} </label>
//         <input onChange={this.handleInput} className='url' name= 'url' />
//         <button onClick={this.handleGoClick}>Go !</button>
//         <button value = 'GET' onClick={this.handleMethodclick}>GET</button>
//         <button value = 'POST' onClick={this.handleMethodclick}>POST</button>
//         <button value = 'PUT' onClick={this.handleMethodclick}>PUT</button>
//         <button value = 'DELETE' onClick={this.handleMethodclick}>DELETE</button>
//         <ul>{this.state.hits}</ul>
//       </div>
//     )
//   }
// }


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;