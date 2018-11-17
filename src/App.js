import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import ResultsTable from './components/ResultsTable.js';

class App extends Component {
  render() {
    return (
        <div className='App-header'>
          <h1>Smart Evac!</h1>
          <SearchBar />
          <ResultsTable />
        </div>
    );
  }
}

export default App;
