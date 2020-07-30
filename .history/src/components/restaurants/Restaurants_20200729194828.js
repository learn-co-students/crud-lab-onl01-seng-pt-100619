import React, { Component } from 'react';
import Restaurant from './restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.state.restaurant}        
      </ul>
    );
  }
};

export default Restaurants;