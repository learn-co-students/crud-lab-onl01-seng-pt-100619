
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  thisRestReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} reviews={this.thisRestReviews()} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review: {text: review.text, restaurantId: review.restaurantId}}),
  deleteReview: (restId, id) => dispatch({type: 'DELETE_REVIEW', restaurantId: restId, id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)