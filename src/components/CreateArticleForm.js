import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";

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
      renderArticleForm: !this.state.renderArticleForm
    });
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
        articleSaved: true,
        renderArticleForm: false
      });
    } else {
      this.setState({
        errorMessage: response.data.body.message
      });
    }
  }

  render() {
    let articleStatus;

    if (this.state.articleSaved === true) {
      articleStatus = "Article successfully created";
    } else if (
      this.state.articleSaved === false &&
      this.state.errorMessage !== ""
    ) {
      articleStatus = this.state.errorMessage;
    }

    return (
      <Container>

        {this.props.currentUser.attributes.role === "research_group_user" ? (
          <Button id="create-article-button" onClick={this.formHandler}>
            Create Article
          </Button>
        ) : (
          ""
        )}

        {this.state.renderArticleForm ? (
          <Form
            id="create-article-form"
            onSubmit={e => this.saveArticleHandler(e)}
          >
          <Form.Field>
              <label>Author</label>
              <input
                id="author"
                value={this.state.author}
                onChange={e => this.setState({ author: e.target.value })}
              />
           </Form.Field>

           <Form.Field>
              <label>Title</label>
              <input
                id="title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </Form.Field>
            
            <Form.Field>
              <label>Text</label>
              <input
                id="body"
                value={this.state.body}
                onChange={e => this.setState({ body: e.target.value })}
              />
            </Form.Field>

            <Button id="submit-article-button" type="submit" value="Create" >Create New Article</Button>
          </Form>
        ) : (
          ""
        )}

        {articleStatus}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};
export default connect(mapStateToProps)(CreateArticleForm);
