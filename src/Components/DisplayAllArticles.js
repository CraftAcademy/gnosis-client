import React, { Component } from 'react';
import axios from 'axios'
import ArticleTemplate from './ArticleTemplate';

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
            <ArticleTemplate article={article}/>
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