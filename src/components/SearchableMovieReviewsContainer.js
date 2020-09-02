import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'F2AArhXTZBGnikms4Wsn6yAdQDtotGTd';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchFetch = (event) => {
    event.preventDefault()

    fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then((obj) => {
      this.setState({
        reviews: obj.results
      })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchFetch}>
          <input onChange={this.handleSearch} value={this.state.searchTerm}></input>
        </form>
        <div>
          <MovieReviews 
            reviews={this.state.reviews} 
          />
        </div>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer