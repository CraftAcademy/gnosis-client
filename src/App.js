import React, { Component } from "react";
import DisplayAllArticles from "./Components/DisplayAllArticles";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>GNOSIS</h1>
        </div>

        <>
          <DisplayAllArticles />
        </>
      </div>
    );
  }
}

export default App;
