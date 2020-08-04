import React, { Component } from 'react';

class RestaurantModify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.restaurant.text,
      id: props.restaurant.id
    }
  }
  
  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.modifyRestaurant(this.state)
    this.props.modifyComplete()
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Change Restaurant Name: </label>
          <input onChange={this.handleChange} type='text' value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantModify;