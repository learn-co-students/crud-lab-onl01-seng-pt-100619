import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.props)
    this.props.addReview({text: this.state.text, id: this.props.restaurantId})
    console.log(this.restaurantId)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event)=> this.setState({text: event.target.value})} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
