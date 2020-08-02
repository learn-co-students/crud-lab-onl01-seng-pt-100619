import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const {reviews, restaurantId, deleteReview} = this.props
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const renderReviews = filteredReviews.map(review => <Review review={review} key={review.id} deleteReview={deleteReview} />)
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;