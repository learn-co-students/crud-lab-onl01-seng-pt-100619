import React, { Component } from 'react';
import Restaurant from './Restaurant';

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