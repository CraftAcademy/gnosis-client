import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux'
import getCity from "../modules/openCageWrapper";
import getLocalArticles from "../modules/getLocalArticles"


class DisplayArticles extends Component {
  state = {
    articles: [],
    position: {},   
    city: "",
    localArticles: []
  };

  componentDidMount() {
    this.getArticles();

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ position: position }, () => {
        this.getUserCity();
      });
    });
  }

  async getUserCity() {
    let city = await getCity(
      this.state.position.coords.latitude,
      this.state.position.coords.longitude
    );
    this.setState({ city: city }, () => {
      if (this.state.city) {
        this.getLocalArticles();
      }
    }); 
  }

  async getLocalArticles(){
    let response = await getLocalArticles(this.state.city);

    if (response.status === 200) {
      this.setState({
        localArticles: response.data
      });
    } else {
      return response.error
    }
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
    let articleCityDisplay; 
    const articlesDisplay =
      this.state.articles.length > 0 &&
      this.state.articles.map(article => {
        return <ArticleTemplate key={article.id} article={article} />;
      });

    if (this.state.articles.length > 0) {
      articleCityDisplay = (
        <div id="local-research">
          <h1>Local Research</h1>
          {this.state.localArticles.map(article => {
            return <ArticleTemplate key={article.id} article={article} />;
          })} 
        </div>
      )   
    }

    return (
      <>
        <Container>
          {articleCityDisplay}
          {articlesDisplay ? (
            <>
              <h1>Research</h1>
              {articlesDisplay}
            </>
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
