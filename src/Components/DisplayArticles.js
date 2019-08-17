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
    try {
      const response = await axios.get("http://localhost:3000/api/v0/articles");
      this.setState({
        articles: response.data
      });
    } catch (error) {
      if (error.response) {
        console.log("Server has responded to request from client with an error message");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log("No response is received by client after request to server");
        console.log(error.request);
      } else {
        console.log("The client request to the server has a configuration error");
        console.log("Error", error.message);
      }
      console.log("General error message");
      console.log(error);
    }
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
