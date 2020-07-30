import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        <Restaurant 
        key={restaurant.id}
        restaurant={restaurant} />      
      </ul>
    );
  }
};

export default Restaurants;