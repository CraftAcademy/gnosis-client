import React from 'react';
import SignupForm from './components/SignupForm'
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
     <h1>GNOSIS</h1>
      <SignupForm />
      <LoginForm />
      <CreateArticleForm />
    </div>
  );
}

export default App;
