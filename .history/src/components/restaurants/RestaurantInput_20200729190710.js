import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }


  render() {
    return (
      <div>
        <input type="text">


        </input>
      </div>
    );
  }
};

export default RestaurantInput;
