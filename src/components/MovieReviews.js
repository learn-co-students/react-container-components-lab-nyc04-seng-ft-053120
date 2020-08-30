import React from 'react'

const Review = ({display_title}) => (<div className="review">{display_title}</div>)

const MovieReviews = ({reviews}) => {
    return (<div className="review-list">{reviews.map(Review)}</div>)
}

MovieReviews.defaultProps = {
   reviews: []
}

export default MovieReviews;