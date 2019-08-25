import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";
import { Container } from "semantic-ui-react";

class DisplayArticles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    const response = await axios.get("/articles");
    if (response.data.length > 0) {
      this.setState({
        articles: response.data
      });
    }
  }

  render() {
    const articlesDisplay =
      this.state.articles.length > 0 &&
      this.state.articles.map(article => {
        return <ArticleTemplate key={article.id} article={article} />;
      });

    return (
      <>
        <Container>
          <p>
            <h3>Local Research in your Area</h3>
            {/* Insert code to match article city against user geotag here */}
          </p>
          {articlesDisplay ? (
            articlesDisplay
          ) : (
            <div className="articles">
              <p>Articles are currently unavailable.</p>
            </div>
          )}
        </Container>
      </>
    );
  }
}

export default DisplayArticles;
