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
    const availability = this.state.articlesAvailability;
    const articlesDisplay = this.state.articles.map(article => {
      return <ArticleTemplate article={article} />
    })

    return (
      <>
        {availability ?
          articlesDisplay :
          <div className="articles">
            <p>Articles are currently unavailable.</p>
          </div>
        }
      </>
    )
  }
}

export default DisplayArticles;
