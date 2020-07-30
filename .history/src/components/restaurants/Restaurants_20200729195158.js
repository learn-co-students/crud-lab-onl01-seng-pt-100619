import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        <Restaurant restaurant={restaurant} ></Restaurant>       
      </ul>
    );
  }
};

export default Restaurants;