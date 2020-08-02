import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const assocReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = assocReviews.map(review => <Review review={review}  key={review.id} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;