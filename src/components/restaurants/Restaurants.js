import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
  
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return (
            < Restaurant modifyRestaurant={this.props.modifyRestaurant} deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />
            )
        })}
      </ul>
    );
  }
};

export default Restaurants;