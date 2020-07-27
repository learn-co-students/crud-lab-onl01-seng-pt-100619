import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text) // pass in only the value of the state and set the key on the reducer
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event) }>
          <input type="text" onChange={(event) => this.setState({text: event.target.value})} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
