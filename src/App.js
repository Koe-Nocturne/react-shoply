import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ItemslistContainer from './containers/ItemsListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <NavBar />
        <ItemslistContainer/>
      </div>
        );
      }
    }
    
    export default App;
