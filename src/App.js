import React, { Component } from "react";
import DisplayArticles from "./Components/DisplayArticles";
import {Container, Header,Divider} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>
          GNOSIS
        </Header>

        <Divider/>

        <DisplayArticles />
      </Container>
    );
  }
}

export default App;
