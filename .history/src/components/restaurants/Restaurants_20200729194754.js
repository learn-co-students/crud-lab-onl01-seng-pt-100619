import React, { Component } from 'react';
import Restaurant from './restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {restaurants}        
      </ul>
    );
  }
};

export default Restaurants;