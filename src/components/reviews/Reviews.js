import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return reviews.map( (review, id) => <Review review={review} key={id} delete={this.props.delete}/>)
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;