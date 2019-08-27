import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux'


class DisplayArticles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    const response = await axios.get("/articles");
    if (response.data.length > 0) {
      this.setState({
        articles: response.data,
      });
    }
  }

  render() {
    const articlesDisplay =
      this.state.articles.length > 0 &&
      this.state.articles.map(article => {
        return <ArticleTemplate key={article.id} article={article} />;
      });
  

      // Something like this
      
  //   const articleCityDisplay =
  //     this.state.articles.city.forEach(article => {
  //     if (this.state.article.city === this.state.position.coords) {
  //       return <ArticleTemplate key={article.id} article={article} />
  //     )}
  // }
    return (
      <>
        <Container>
          <p>
            {/* {articleCityDisplay} */}
          </p>
          {articlesDisplay ? (
            articlesDisplay
          ) : (
            <div className="articles">
              <p>Articles are currently unavailable.</p>
            </div>
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default (connect(
  mapStateToProps)(DisplayArticles))
