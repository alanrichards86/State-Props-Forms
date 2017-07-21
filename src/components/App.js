import React, { Component } from 'react';
import logo from '../logo.svg';
// import NavBar from './NavBar.js';
import PlayLists from './PlayList';
// import PlayListForm from './PlayListForm';
import '../styles/App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      value:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input type='text' name='value' onChange={this.handleChange}></input>
        </div>
        <PlayLists />
      </div>
    );
  }
}

export default App;
