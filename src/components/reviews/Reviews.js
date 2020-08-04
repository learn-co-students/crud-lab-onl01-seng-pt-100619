import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  
  
  render() {
    console.log('props for reviews in reviews component:')
  console.log(this.props)

    return (
      <ul>
        {this.props.reviews.map(review => {
          if (review.restaurantId === this.props.restaurantId) {
            return < Review restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview} review={review} key={review.id} />
          }
        })}
      </ul>
    );
  }
};

export default Reviews;