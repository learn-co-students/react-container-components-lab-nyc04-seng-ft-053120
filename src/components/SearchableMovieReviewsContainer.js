import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${process.env.REACT_APP_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL + this.state.searchTerm)
      .then((response) => response.json())
      .then((result) => {
        const reviews = result.results.map((review) => {
          return {
            headline: review.headline,
            author: review.byline,
            summary: review.summary_short,
          };
        });

        this.setState({ reviews });
      });
  };

  handleSearch = (e) => {
    const searchTerm = e.target.value;

    this.setState({ searchTerm });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleSearch}
            type="text"
            value={this.state.searchTerm}
          />
          <input type="submit" value="Search" />
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} title="Search Results" />
        </div>
      </div>
    );
  }
}
