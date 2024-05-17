import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 10,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string.isRequired,
    pageSize : PropTypes.number.isRequired,
    category : PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0,
    };
    document.title = `NewsMonkey- ${this.capitalize(this.props.category)}`
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async getNews(){
    this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
      articles: parsedDate.articles,
      totalResult: parsedDate.totalResults,
      loading : false
    });
  }

  componentDidMount() {
    this.getNews();
  }

  handlePrevClick = () => {
    this.setState({page : this.state.page - 1})
    this.getNews();
  };

  handleNextClick = () => {
    this.setState({page : this.state.page + 1})
    this.getNews();
  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center">
          News Monkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>}
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={Math.ceil(this.state.totalResult / this.props.pageSize) < this.state.page + 1}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
