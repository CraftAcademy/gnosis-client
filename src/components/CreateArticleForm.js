import React, { Component } from "react";
import { saveArticle } from "../modules/saveArticle";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";

class CreateArticleForm extends Component {
  state = {
    title: "",
    body: "",
    articleSaved: false
  };

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  pdfHandler = async event => {
    const file = event.target.files[0]
    let convertedFile = await this.toBase64(file)
    this.setState({pdf: convertedFile})
  }

  async saveArticleHandler(e) {
    e.preventDefault();
    let response = await saveArticle(
      this.state.title,
      this.state.body,
      this.state.pdf
    );
    if (response.status === 200) {
      debugger;
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

                <Form.Field>
                  <label>PDF</label>
                  <input type="file"
                  onChange={e => this.pdfHandler(e)}
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
