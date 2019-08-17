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

  formHandler = () => {
    this.setState({
      renderArticleForm: !this.state.renderArticleForm,
      articleSaved: false,
      errorMessage: ""
    });
  };

  async onSave(e) {
    e.preventDefault();
    let response = await saveArticle(
      this.state.author,
      this.state.title,
      this.state.body
    );
    if (response.status === 200) {
      this.setState({ 
        articleSaved: true,
        renderArticleForm: false });
    } else {
      this.setState({
        errorMessage: response.data.body.message
      });
    }
  }

  render() {
    let articleStatus;
    let form;
    let createArticle;

    if (this.state.articleSaved === true) {
      articleStatus = "Post successfully created";
    } else if (
      this.state.articleSaved === false &&
      this.state.errorMessage !== ""
    ) {
      articleStatus = this.state.errorMessage;
    }

    if (this.state.renderArticleForm === true) {
      form = (
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
        </form>
      );
    }
    if (this.props.currentUser.attributes.role === "research_group_user") {
      createArticle = (
        <button id="create-article" onClick={this.formHandler}>
          Create Article
        </button>
      );
    }

    return (
      <div id="create-article-component">
        {createArticle}
        {form}
        {articleStatus}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};
export default connect(mapStateToProps)(CreateArticleForm);
