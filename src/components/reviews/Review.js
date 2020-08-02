import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props

    return (
      <div className="review">
        <li>
          {review.text}
        </li>
        <button onClick={() => {deleteReview(review.id)}}> X </button>
      </div>
    );
  }

};

export default Review;
