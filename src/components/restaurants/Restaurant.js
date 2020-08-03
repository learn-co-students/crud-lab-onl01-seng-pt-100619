import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    console.log(this.props.restaurant.id)
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant 


