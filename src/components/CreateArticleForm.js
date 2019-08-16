import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";

class CreateArticleForm extends Component {
    state = {
      author: "",
      title: "",
      body: "",
      errorMessage: "",
      articleSaved: false
    };

  async onSave(e) {
    e.preventDefault();
    let response = await saveArticle(
      this.state.author,
      this.state.title,
      this.state.body
    );
    if (response.status === 200) {
      this.setState({ articleSaved: true });
    } else {
      this.setState({
        errorMessage: response.message
      });
    }
  }

  render() {
    let articleStatus;
    if (this.state.articleSaved === true) {
      articleStatus = "Post successfully created";
    } else if (
      this.state.articleSaved === true &&
      this.state.errorMessage !== ""
    ) {
      articleStatus = this.state.errorMessage;
    }

    return (
      <form id="post-article-form" onSubmit={e => this.onSave(e)}>
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
        <input id="submit-button" type="submit" value="Create" />
        <div>{articleStatus}</div>
      </form>
    );
  }
}

export default CreateArticleForm;
