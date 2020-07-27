import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    /* restaurant ID can be sent to the store through the form */
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} /> 
        <Reviews  restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review})
  }
}

// const mapStateToProps = ({reviews}) => ({reviews})

export default connect(null, mapDispatchToProps)(ReviewsContainer);
