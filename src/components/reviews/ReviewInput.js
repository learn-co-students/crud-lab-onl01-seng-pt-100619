import React, { Component } from 'react'

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }

    this.props.addReview(review)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Restaurant Review:</label>
          <input onChange={this.handleChange} type='text' value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
