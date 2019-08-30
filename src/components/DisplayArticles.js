import React, { Component } from "react";
import axios from "axios";
import ArticleTemplate from "./ArticleTemplate";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import getCity from "../modules/openCageWrapper";

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
        this.getCityArticles();
      }
    });
  }

  async getCityArticles() {
    try {
      const response = await axios.get(`/articles/${this.state.city}`);
      this.setState({ localArticles: response.data });
    } catch (error) {
      this.props.dispatchFlash(
        "If you want to enable local Research section, please share your location",
        "error"
      );
    }
  }

  async getArticles() {
    const response = await axios.get("/articles");
    if (response.data.length > 0) {
      this.setState({
        articles: response.data
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

    if (this.state.localArticles.length > 0) {
      articleCityDisplay = (
        <div id="local-research">
          <h1>Local Research</h1>
          {this.state.localArticles.map(article => {
            return <ArticleTemplate key={article.id} article={article} />;
          })}
        </div>
      );
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

const mapDispatchToProps = {
  dispatchFlash: (message, status) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message, status: status }
  })
};

export default connect(
  null,
  mapDispatchToProps
)(DisplayArticles);
