import React, { Component } from 'react';

class ReviewInput extends Component {
  state={
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    debugger
    this.props.addReview({text: this.state.text, restaurantId: e.target.id})
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} id={this.props.restaurantId} >
          <label>Add a Review:</label> <br />
          <input onChange={this.handleOnChange} type="text" value={this.state.text} /> <br /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
