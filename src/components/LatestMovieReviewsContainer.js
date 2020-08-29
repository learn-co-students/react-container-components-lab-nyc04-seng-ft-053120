import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${process.env.REACT_APP_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(URL)
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
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews
          reviews={this.state.reviews}
          title="Latest Movie Reviews"
        />
      </div>
    );
  }
}
