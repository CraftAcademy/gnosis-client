import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";

class DisplayArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    axios.get("http://localhost:3000/api/v0/articles")
    .then(response => {
      this.setState({
        articles: response.data
      });
    });
  }

  render() {
    const articles = this.state.articles;

    let articlesList;
    articlesList = articles.map(article => {
      return (
        <>
          <ArticleTemplate article={article} />
        </>
      );
    });

    return <div className="articles">{articlesList}</div>;
  }
}

export default DisplayArticles;
