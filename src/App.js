import React from "react";
import DisplayArticles from "./components/DisplayArticles";
import { Container, Header, Divider } from "semantic-ui-react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./NavBar.js";
import './styling/App.css'

function App() {
  return (
    <Container>
      <Header as="h1" textAlign="center">
        GNOSIS
      </Header>
      <LoginForm />
      <CreateArticleForm />

      <Divider />

      <DisplayArticles />
    </Container>
  );
}

export default App;
