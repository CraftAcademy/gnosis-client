import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";
import { Container } from "semantic-ui-react";


class DisplayArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      articlesAvailability: true
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    try {
      const response = await axios.get("/articles");
      this.setState({
        articles: response.data
      });
    } catch (error) {
      this.setState({
        articlesAvailability: false
      });
    }
  }

  render() {
    const availability = this.state.articlesAvailability;
    const articlesDisplay = this.state.articles.map(article => {
      return <ArticleTemplate article={article} />
    })

    return (
      <>
        <Container>
          {availability ?
            articlesDisplay :
            <div className="articles">
              <p>Articles are currently unavailable.</p>
            </div>
          }
        </Container>
      </>
    )
  }
}

export default DisplayArticles;
