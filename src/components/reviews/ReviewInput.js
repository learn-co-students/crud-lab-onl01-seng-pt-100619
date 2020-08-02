import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
      text: ''
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
