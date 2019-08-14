import React, { Component } from "react";

class CreateArticleForm extends Component {
  render() {
    return (
    <form id="post-article-form">
    <div>
      <label>Author</label>
      <input id="author-id"></input>
    </div>
    <div>
      <label>Title</label>
      <input id="title"></input>
    </div>
    <div>
      <label>Text</label>
      <input id="body"></input>
    </div>
    <button id="submit-button">Submit</button>
  </form>
  )}
}

export default CreateArticleForm;
