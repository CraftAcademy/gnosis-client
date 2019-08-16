import React, { Component } from "react";

class ArticleTemplate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const article = this.props.article;

    return (
      <>
        <div id={`article_${article.id}`}>
          <div id="title">{article.title}</div>
          <div id="body">{article.body}</div>
          <div id="date">{article.date}</div>
          <div id="author">{article.author}</div>
        </div>
      </>
    );
  }
}

export default ArticleTemplate;