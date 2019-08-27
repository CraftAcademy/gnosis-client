import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";

class CreateArticleForm extends Component {
  state = {
    author: "",
    title: "",
    body: "",
    city: "",
    articleSaved: false
  };

  async saveArticleHandler(e) {
    e.preventDefault();
    let response = await saveArticle(
      this.state.city,
      this.state.author,
      this.state.title,
      this.state.body
    );
    if (response.status === 200) {
      this.setState({
        articleSaved: true
      });
      this.props.dispatch({ type: 'SHOW_FLASH_MESSAGE', payload: { flashMessage: response.data.body.message, status: 'success' } })

    } else {
      this.props.dispatch({ type: 'SHOW_FLASH_MESSAGE', payload: { flashMessage: response.data.body.message, status: 'error' } })

    }
  }

  render() {
    return (
      <>
        <Container>
          <div id="create-article-component">
            {!this.state.articleSaved &&
              <Form
                id="create-article-form"
                onSubmit={e => this.saveArticleHandler(e)}
              >
                   <Form.Field>
                  <label>City</label>
                  <input
                    id="city"
                    value={this.state.city}
                    onChange={e => this.setState({ city: e.target.value })}
                  />
                </Form.Field>
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
                <Button
                  id="submit-article-button"
                  type="submit"
                >Create</Button>
              </Form>
            }
          </div>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};
export default connect(mapStateToProps)(CreateArticleForm);
