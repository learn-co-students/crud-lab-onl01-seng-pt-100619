import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import RestaurantModify from '../components/restaurants/RestaurantModify'

class RestaurantsContainer extends Component {
  state = {
    modify: false,
    restaurant: ""
  }
  
  handleModify = (restaurant) => {
    console.log("modify clicked!")
    console.log(restaurant)
    this.setState({modify: true, restaurant: restaurant})
  }

  modifyComplete = () => this.setState({modify: false})

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants modifyRestaurant={this.handleModify} deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
        {/* {this.state.modify ? <RestaurantModify modifyComplete={this.modifyComplete} modifyRestaurant={this.props.modifyRestaurant} restaurant={this.state.restaurant} /> : null} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', text: restaurant.text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id}),
  modifyRestaurant: restaurant => dispatch({type: 'MODIFY_RESTAURANT',restaurant: restaurant})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
