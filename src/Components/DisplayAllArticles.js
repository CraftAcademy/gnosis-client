import React, { Component } from 'react';
import { async } from 'q';

class DisplayAllArticles extends Component {
  constructor() {
    super() 
    this.state = {
      displayAllArticles: []
    }
  }
  componentDidMount() {
    this.setArticlesToState()
  }

  async setArticlesToState() {
    let articles = await getArticlesFromApi();
  }
  render() {
    return (
      <div>

      </div>
    );
  }

}

export default DisplayAllArticles