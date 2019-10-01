import React, { Component } from "react";
import NavBarContainer from "./containers/NavBarContainer";
import ItemslistContainer from "./containers/ItemsListContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <ItemslistContainer />
      </div>
    );
  }
}

export default App;
