import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map( restaurant => <Restaurant delete={this.props.delete} restaurant={restaurant} key={restaurant.id}/>)
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;