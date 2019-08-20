import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";
import { connect } from "react-redux";

class CreateArticleForm extends Component {
  state = {
    author: "",
    title: "",
    body: "",
    errorMessage: "",
    articleSaved: false
  };

  async saveArticleHandler(e) {
    e.preventDefault();
    let response = await saveArticle(
      this.state.author,
      this.state.title,
      this.state.body
    );
    if (response.status === 200) {
      this.setState({
        articleSaved: true
      });
    } else {
      this.setState({
        errorMessage: response.data.body.message
      });
    }
  }

  render() {
    let articleStatus;
    let createArticleForm;

    if (this.state.articleSaved === true) {
      //dispatch action in this if/else statement
    } else if (
      this.state.articleSaved === false &&
      this.state.errorMessage !== ""
    ) {
      articleStatus = this.state.errorMessage;
    }

    return (
      <div id="create-article-component">
        <form
          id="create-article-form"
          onSubmit={e => this.saveArticleHandler(e)}
        >
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
            id="submit-article-button"
            type="submit"
            value="Create"
          />
        </form>
        {articleStatus}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};
export default connect(mapStateToProps)(CreateArticleForm);
