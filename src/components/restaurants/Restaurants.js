import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {


  render() {
    const restaurants = this.props.restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={this.props.delete} /> )

    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};


export default Restaurants;