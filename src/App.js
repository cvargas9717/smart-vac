import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
