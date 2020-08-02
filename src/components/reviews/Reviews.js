import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    console.log(this.props)
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = associatedReviews.map(review => <Review review={review} key={review.id} />)
    

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;