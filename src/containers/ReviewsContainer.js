import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews  reviews={this.props.reviews} restaurant={this.props.restaurant} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {reviews: state.reviews}
}

const mapDispatchToProps = (dispatch) => {
  return {addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", text, restaurantId }),
  delete: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId })}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
