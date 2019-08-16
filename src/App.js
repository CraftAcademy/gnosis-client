import React, { Component } from "react";
import DisplayAllArticles from "./Components/DisplayAllArticles";
import {Container, Header,Divider} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>
          GNOSIS
      </Header>
      <Divider/>
        <>
          <DisplayAllArticles />
        </>
      </Container>
    );
  }
}

export default App;
