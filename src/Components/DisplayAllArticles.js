import React, { Component } from 'react';
import axios from 'axios'

class DisplayAllArticles extends Component {
  constructor() {
    super() 
    this.state = {
      allArticles: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v0/articles')
      .then(response => {
        this.setState({
          allArticles: response.data
        });
      });
  }

  render() {
    const articles = this.state.allArticles
    let articlesList

    if (articles.length > 0) {
      articlesList = articles.map(article => {
        return (
          <>
            <div id={`article_${article.id}`}>
              <div id="title">{article.title}</div>
              <div id="body">{article.body}</div>
              <div id="date">{article.date}</div>
              <div id="author">{article.author}</div>
            </div>
          </>
        )
      })
    }

    return (
      <div className="articles">
        { articlesList }
      </div>
    );
  }
}

export default DisplayAllArticles