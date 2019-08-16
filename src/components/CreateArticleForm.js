import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";

class CreateArticleForm extends Component {
    state = {
      author: "",
      title: "",
      body: "",
      articleSaved: false
    };

  onSave(e) {
    e.preventDefault();
    saveArticle(this.state.author, this.state.title, this.state.body);
    this.setState({ articleSaved: true });
    console.log(this.state.author);
    console.log(this.state.title);
    console.log(this.state.body);
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
            id="author"
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
        <input
          id="submit-button"
          type="submit"
          value="Create"
          onClick={e => this.onSave(e)}
        />
        <div>{articleSavedConfirmation}</div>
      </form>
    );
  }
}

export default CreateArticleForm;
