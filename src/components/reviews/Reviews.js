import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    let ourReviews 
    let renderReviews

    if (!!this.props.reviews) {
      ourReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
      renderReviews = ourReviews.map((review) => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} /> )
    } else {
      renderReviews = <li>nothing to display</li>
    }
    
    
    

    return (
      <ul>
        { renderReviews }
      </ul>
    );
  }
};

export default Reviews;