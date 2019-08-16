import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";

class CreateArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      body: "",
      message: "",
      articleSaved: false
    };
  }

  onSave(e) {
    e.preventDefault();
    saveArticle(this.state.author, this.state.title, this.state.body);
    this.setState({ articleSaved: true });
  }

  render() {
    let articleSavedConfirmation = "";
    if (this.state.articleSaved === true) {
      articleSavedConfirmation = "Post successfully created";
    }

    return (
      <form id="post-article-form">
        <div>
          <label>Author</label>
          <input
            id="author-id"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            id="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div>
          <label>Text</label>
          <input
            id="body"
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
        </div>
        <button id="submit-button" onClick={e => this.onSave(e)}>
          Submit
        </button>
        <div>{articleSavedConfirmation}</div>
      </form>
    );
  }
}

export default CreateArticleForm;
