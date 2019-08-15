import React, { Component } from 'react';
import axios from 'axios'
//import { async } from 'q';

class DisplayAllArticles extends Component {
  constructor() {
    super() 
    this.state = {
      allArticles: []
    }
  }
  componentDidMount() {
    const apiUrl = "http://localhost:3000/api/v0/articles"
    axios.get(apiUrl)
      .then(response => {
        this.setState({
          allArticles: response.data
        })
      })
  }

  render() {
    const articles = this.state.allArticles
    let articlesList
    
    if (articles.length > 0) {
      articlesList = articles.map(article => {
        return (
          <div>
            <p>{article.author}</p>
          </div>
        )
      })
    }

    return (
      <div>
        { articlesList }
      </div>
    );
  }
}

export default DisplayAllArticles