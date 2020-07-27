import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    console.log(this.props) // have to set up the empty reviews array as an initial state for restaurant
    return this.props.restaurant.reviews.map( (review, id) => <Review review={review} key={id}/>)
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