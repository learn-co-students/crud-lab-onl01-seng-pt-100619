
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: []
    }, 
    action) 
    {
    switch(action.type){
        case 'ADD_RESTAURANT':

            const restaurant = {
                text: action.text, // cant pass the entire state as a prop it would have a duplicate text key 
                id: cuid(),
                reviews: []
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
            const reviewedRestaurantId = state.restaurants.findIndex(restaurant => {return restaurant.id === action.review.id})
            const review = {text: action.text, id: cuid()}
            console.log(state.restaurants[reviewedRestaurantId])
            return{
                ...state, 
                restaurants: [
                    ...state.restaurants.splice(0, reviewedRestaurantId), 
                    state.restaurants[reviewedRestaurantId], {
                        ...state.restaurants[reviewedRestaurantId], 
                        reviews: [...state.restaurants[reviewedRestaurantId].reviews.concat(review)]
                    }, 
                    state.restaurants.splice(reviewedRestaurantId+1)
                ]
            }
        default: // if no default is returned the store props will be undefined at the start of the app so they cant be referenced
            // console.log(state)
            return state
    }
}
