import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    fetch(URL + `query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => this.setState({reviews: data.results}))
  }

  handleOnChange = event => {
    this.setState({searchTerm: event.target.value})
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="search">Search Review</label>
          <input id="search" type="text" onChange={this.handleOnChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;