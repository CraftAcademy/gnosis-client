import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";

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
      const response = await axios.get("http://localhost:3000/api/v0/articles");
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
    const articles = this.state.articles;
    const availability = this.state.articlesAvailability;

    if (availability === true) {
      let articlesList;
      articlesList = articles.map(article => {
        return (
          <>
            <ArticleTemplate article={article} />
          </>
        );
      });

      return <div className="articles">{articlesList}</div>;
    } else if (availability === false) {
      return (
        <div className="articles">
          <p>Articles are currently unavailable.</p>
        </div>
      );
    }
  }
}

export default DisplayArticles;
