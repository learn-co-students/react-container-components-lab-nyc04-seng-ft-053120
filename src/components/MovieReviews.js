import React from "react";

export default function MovieReviews({ reviews, title }) {
  const mapProps = () => {
    if (reviews) {
      return reviews.map((movie) => {
        return (
          <div key={movie.headline} className="review">
            <h2>{movie.headline}</h2>
            <h4>{movie.author}</h4>
            <p>{movie.summary}</p>
            <hr />
          </div>
        );
      });
    }
  };

  return (
    <div className="review-list">
      <h1>{title}</h1>
      {mapProps()}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: [],
};
