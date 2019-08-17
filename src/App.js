import React from "react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <h1>GNOSIS</h1>
      <LoginForm />
      <CreateArticleForm />
    </div>
  );
}

export default App;
