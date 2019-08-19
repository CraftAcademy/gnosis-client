import React from "react";
import DisplayArticles from "./Components/DisplayArticles";
import {Container, Header,Divider} from 'semantic-ui-react';

function App() {
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

export default App;
