import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    /* restaurant ID can be sent to the store through the form */
    // reviews are already associated to the restaurant by being react children of restaurants
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} /> 
        <Reviews  reviews={this.props.reviews} restaurant={this.props.restaurant} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    delete: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId}) // delete review from store with id
  }
}

const mapStateToProps = ({reviews}) => ({reviews}) // set reviews to store here and also in the reducer manageRestaurant

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
