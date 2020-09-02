// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list">
    {
      props.reviews.map(review => {
        return ( 
          <div key={review.headline} className="review">
            <h1>{review.headline}</h1>
            <h3>{review.byline}</h3>
          </div>
        )
      })
    }
  </div>
  )
}

export default MovieReviews 