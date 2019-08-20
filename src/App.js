import React from "react";
import SignupForm from "./components/SignupForm";
import DisplayArticles from "./components/DisplayArticles";
import { Container, Header, Divider } from "semantic-ui-react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (

    <Container>
      <Header as="h1" textAlign="center">
        GNOSIS
      </Header>
      <SignupForm />
      <LoginForm />
      <CreateArticleForm />

      <Divider />

      <DisplayArticles />
    </Container>
  );
}

export default App;
