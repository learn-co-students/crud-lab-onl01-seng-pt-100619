
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
    }, 
    action) 
    {
    switch(action.type){
        case 'ADD_RESTAURANT':

            const restaurant = {
                text: action.text, // cant pass the entire state as a prop it would have a duplicate text key 
                id: cuid(),
                // reviewIds: []
            }
            // console.log(restaurant) useful to find duplicate text key
            return {
                ...state, restaurants: [...state.restaurants.concat(restaurant)]
            }
        case 'DELETE_RESTAURANT':
            return {
                ...state, restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.id)]
            }
        case 'ADD_REVIEW':
            // console.log(state.restaurants)
            // const reviewedRestaurant = state.restaurants.find(restaurant => {return restaurant.id === action.review.id})
            const review = {text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId}
            // console.log(review)
            // reviewedRestaurant.reviewIds.concat(review.id)
            return {
                ...state, reviews: [...state.reviews.concat(review)]
            }
        case 'DELETE_REVIEW':
            // const reviews = state.reviews.filter(review => review.id !== action.reviewId)
            return {
                ...state, reviews: [...state.reviews.filter(review => review.id !== action.reviewId)]
            }
        default: // if no default is returned the store props will be undefined at the start of the app so they cant be referenced
            // console.log(state)
            return state
    }
}



