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
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text">


        </input>
      </form>
      </div>
    );
  }
};

export default RestaurantInput;
