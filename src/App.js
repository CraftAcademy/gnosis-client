import React from "react";
<<<<<<< HEAD
import SignupForm from "./components/SignupForm";
=======
import DisplayArticles from "./components/DisplayArticles";
import { Container, Header, Divider } from "semantic-ui-react";
>>>>>>> 6323472c3596805c058ce646d5351e22156aa868
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1>GNOSIS</h1>
      <SignupForm />
=======
    <Container>
      <Header as="h1" textAlign="center">
        GNOSIS
      </Header>
>>>>>>> 6323472c3596805c058ce646d5351e22156aa868
      <LoginForm />
      <CreateArticleForm />

      <Divider />

      <DisplayArticles />
    </Container>
  );
}

export default App;
