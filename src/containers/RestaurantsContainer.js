import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput' //create new restaurants
import Restaurants from '../components/restaurants/Restaurants' //displays list of restaurants
import { connect } from 'react-redux'
//connects to Redux, passes appropriate props down to it's children

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants
        restaurants={this.props.restaurants}
        deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
  deleteRestaurant: id => dispatch({ type:'DELETE_RESTAURANT', id })
})

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantsContainer)
