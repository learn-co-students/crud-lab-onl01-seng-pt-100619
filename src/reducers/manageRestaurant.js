
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [], reviews: []
}, action) {

    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuidFn()
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT': 
            const newRestaurantsArray = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {...state, restaurants: newRestaurantsArray}
        case 'ADD_REVIEW':
            const review = {text: action.review.text, id: cuidFn(), restaurantId: action.review.restaurantId}
            return {...state, reviews: [...state.reviews,review]}
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.reviewId)
            return {...state, reviews: reviews}
        default: 
            return state;
    }
}
