
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
    console.log(state)
    console.log(action)

    switch (action.type) {
        case 'ADD_RESTAURANT':
            const rest = {id: cuid(), text: action.text}
            return {...state, restaurants: [...state.restaurants, rest]}
            
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)}
            //Also need to delete any related reviews
            return {...state, reviews: state.reviews.filter(review => review.restaurantId !== action.id)}

        case 'MODIFY_RESTAURANT':
            const newRest = state.restaurants.map(restaurant => {
                if (restaurant.id === action.restaurant.id) {
                    restaurant.text = action.restaurant.text
                    return restaurant
                } else {
                    return restaurant
                }
            })
            return {...state, restaurants: newRest}

        case 'ADD_REVIEW':
            const review = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
            return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state


    }
}
