import React, { Component } from 'react';


class ArticleTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: props
    }
  }
  render() {
  const article = this.state.first

    return (
      <>
        <div id={`article_${article.id}`}>
          <div id="title">{article.title}</div>
          {/* <div id="body">{article.body}</div>
          <div id="date">{article.date}</div>
          <div id="author">{article.author}</div> */}
        </div>
      </>
    )
  }
}

export default ArticleTemplate