import React from 'react';

const MovieReviews = props => {
  const renderReviews = () => {
    return props.reviews.map(review => {
      return (
        <div key={review.display_title} className="review">
          <p>{review.headline}</p>
          <p>{review.summary}</p>
        </div>
      )
    })
  }

  return (
    <div className="review-list">
      {renderReviews()}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews;