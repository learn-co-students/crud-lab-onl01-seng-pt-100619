import React, { Component } from 'react';


class RestaurantInput extends Component {

  state={text: ""}

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: "",
    });
  } 

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Restaurant Name:</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} name="text"/>
          <label>Submit</label>
          <button type="submit" >Add</button>
        </form>

        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
